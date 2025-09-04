import formidable from "formidable";
import FormData from "form-data";
import fs from "fs";

export const config = {
  api: { bodyParser: false }, // let formidable handle multipart
};

// helper: take first if array
const first = (v) => (Array.isArray(v) ? v[0] : v);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

//   const bearer = req.headers.authorization || "";
//   const token = bearer.startsWith("Bearer ") ? bearer.slice(7) : bearer;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Missing Bearer token" });
  }

  try {
    // Parse with formidable (v3+)
    const form = formidable({ multiples: false, allowEmptyFiles: false });

    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, flds, fls) => (err ? reject(err) : resolve({ fields: flds, files: fls })));
    });

    // Normalize fields to single string values
    const session = String(first(fields.session) ?? "");
    const type = String(first(fields.type) ?? "file");
    const photo_tag = String(first(fields.photo_tag) ?? "F");

    // Accept either "file" or "files" from the client, but forward EXACTLY ONE
    let uploaded = files.file ?? files.files;
    uploaded = first(uploaded);

    if (!uploaded) {
      return res.status(400).json({ error: 'No file uploaded (expected field "file" or "files")' });
    }

    // Build outbound multipart exactly as Inspektlabs expects:
    // session, type, photo_tag, and ONE "files" part (not an array)
    const out = new FormData();
    out.append("session", session);
    out.append("type", type);              // "file"
    out.append("photo_tag", photo_tag);    // e.g. "F"
    out.append("files", fs.createReadStream(uploaded.filepath), {
      filename: uploaded.originalFilename || "upload",
      contentType: uploaded.mimetype || "application/octet-stream",
    });

    const response = await fetch("https://q-score.inspektlabs.com/api/q_score", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ...out.getHeaders(),
      },
      body: out,
    });

    const text = await response.text();
    let payload;
    try {
      payload = JSON.parse(text);
    } catch {
      return res.status(500).json({ error: "Invalid response from Inspektlabs", raw: text });
    }
    return res.status(response.status).json(payload);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

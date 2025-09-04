export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const response = await fetch("https://q-score.inspektlabs.com/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: process.env.INSPEKTLABS_API_KEY,
        }),
      });
  
      const text = await response.text();
      try {
        const data = JSON.parse(text);
        if (!response.ok) {
          return res.status(response.status).json({ error: data });
        }
        return res.status(200).json(data);
      } catch (err) {
        return res.status(500).json({
          error: "Invalid response from Inspektlabs",
          raw: text,
        });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
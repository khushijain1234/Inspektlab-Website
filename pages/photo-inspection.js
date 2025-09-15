import React, { useRef, useState } from "react";
import styles from "../styles/PhotoInspection.module.css";
import Image from "next/image";
import { questions } from "../const/faq";
import {
  featureData,
  useCases,
  photoAPIFeatures,
} from "../const/photo-inspection";
import ContactUs from "./contact-us";

const PhotoInspection = ({ locale }) => {
  const scrollRef = useRef();
  const featuresScrollRef = useRef();
  const tryProductRef = useRef();
  const contactUsRef = useRef(null);
  const [imageList, setImageList] = useState(null);
  const [urls, setUrls] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPrevewImage] = useState(null);
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showContactSection, setShowContactSection] = useState(false);

  const handleImageList = (files) => {
    if (files && files[0]) {
      setFile(files[0]);
      setPrevewImage(URL.createObjectURL(files[0]));
    }
  };
  const handleScroll = () => {
    setShowContactSection(true);
    contactUsRef.current?.scrollIntoView({
      behavior: "smooth", // smooth scrolling effect
      block: "center",     // align to the top
    });
  };
  async function getToken() {
    const res = await fetch("/api/authenticate", { method: "POST" });
    const data = await res.json();
    if (data) return data;
    throw new Error("Failed to get token");
  }

  function checkAndIncrementAttempts() {
    let attempts = parseInt(localStorage.getItem("uploadAttempts") || "0", 10);

    if (attempts >= 2) {
      // window.location.href = "/contact-us";
      handleScroll()
      return false; // stop execution
    }

    localStorage.setItem("uploadAttempts", (attempts + 1).toString());
    return true; // allowed
  }

  // 🔹 Handle URL submission

  const handleUrlSubmit = async () => {
    const isValidImageUrl = (string) => {
      try {
        const url = new URL(string);
        const validProtocols = ["http:", "https:"];
        const imageExtensions = [
          ".jpg",
          ".jpeg",
          ".png",
          ".gif",
          ".webp",
          ".bmp",
          ".tiff",
        ];

        // Check protocol
        if (!validProtocols.includes(url.protocol)) return false;

        // Check extension
        return imageExtensions.some((ext) =>
          url.pathname.toLowerCase().endsWith(ext)
        );
      } catch (_) {
        return false;
      }
    };

    // Check if URL is valid image
    if (!isValidImageUrl(urls)) {
      setShowAlert(true);
      return;
    }

    if (!checkAndIncrementAttempts()) return;
    setFile(null);
    setLoading(true);
    // const tokenRes = await fetch("/api/authenticate", { method: "POST" });
    // const tokenData = await tokenRes.json();

    // const res = await fetch("/api/qscore-url", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${tokenData.refresh_token}`, // token from authenticate
    //   },
    //   body: JSON.stringify({
    //     urls: [urls], // state variable holding user input URL
    //     session: tokenData.session,
    //     type: "urls",
    //     photo_tag: "F",
    //   }),
    // });

    // const data = await res.json();
    const data={
      "img_mapping": {
          "in482320250915083542-1.jpg": "https://inspektlabs-eu.s3.amazonaws.com/qscore_1222/2025/09/in482320250915083542/original/in482320250915083542-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWCBSHU66ECWP77MC%2F20250915%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T083548Z&X-Amz-Expires=604799&X-Amz-SignedHeaders=host&X-Amz-Signature=f07c86ddccd271dbf834248b40017200b84bacb9f494179e1efec41047c6cdea"
      },
      "original_img_mapping": {},
      "q_score": {
          "in482320250915083542-1.jpg": {
              "angle": "NA",
              "blur_score": 4,
              "car_type": {
                  "car_type": "hatchback",
                  "vehicle_type": "car"
              },
              "color": "",
              "custom_section": {
                  "VIN": "",
                  "abs_light_on": 0,
                  "airbag_light_on": 0,
                  "all_markers_visible": 0,
                  "check_engine_light_on": 0,
                  "engine_on": 0,
                  "hood_open": 0,
                  "indicator_light_on": 0,
                  "mileage": 0,
                  "mileage_km": "",
                  "odometer_ocr_quality_ok": 0,
                  "odometer_reading": "",
                  "plate_engraved_chassis": 0,
                  "quality_vin": 0,
                  "tailgate_open": 0
              },
              "license_reading": "",
              "license_reading_status": [],
              "luma_score": 3,
              "make": "",
              "model": "",
              "odometer_reading_status": [],
              "parts_detected": [],
              "vehicle_type": "",
              "vin_reading_status": []
          }
      },
      "status": "success"
  }
    formatData(data);
    setShowModal("url");
    setLoading(false);
  };

  // 🔹 Handle File submission
  const handleFileSubmit = async () => {
    if (!checkAndIncrementAttempts()) return;
    setUrls("");
    setLoading(true);
    // const tokenRes = await fetch("/api/authenticate", { method: "POST" });
    // const tokenData = await tokenRes.json();

    // const formData = new FormData();
    // formData.append("session", tokenData.session);
    // formData.append("type", "file");
    // formData.append("photo_tag", "F");
    // formData.append("file", file);

    // const res = await fetch("/api/qscore-file", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${tokenData.refresh_token}`,
    //   },
    //   body: formData,
    // });

    // const data = await res.json();
    const data={
      "img_mapping": {
          "in482320250915083542-1.jpg": "https://inspektlabs-eu.s3.amazonaws.com/qscore_1222/2025/09/in482320250915083542/original/in482320250915083542-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWCBSHU66ECWP77MC%2F20250915%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20250915T083548Z&X-Amz-Expires=604799&X-Amz-SignedHeaders=host&X-Amz-Signature=f07c86ddccd271dbf834248b40017200b84bacb9f494179e1efec41047c6cdea"
      },
      "original_img_mapping": {},
      "q_score": {
          "in482320250915083542-1.jpg": {
              "angle": "NA",
              "blur_score": 4,
              "car_type": {
                  "car_type": "hatchback",
                  "vehicle_type": "car"
              },
              "color": "",
              "custom_section": {
                  "VIN": "",
                  "abs_light_on": 0,
                  "airbag_light_on": 0,
                  "all_markers_visible": 0,
                  "check_engine_light_on": 0,
                  "engine_on": 0,
                  "hood_open": 0,
                  "indicator_light_on": 0,
                  "mileage": 0,
                  "mileage_km": "",
                  "odometer_ocr_quality_ok": 0,
                  "odometer_reading": "",
                  "plate_engraved_chassis": 0,
                  "quality_vin": 0,
                  "tailgate_open": 0
              },
              "license_reading": "",
              "license_reading_status": [],
              "luma_score": 3,
              "make": "",
              "model": "",
              "odometer_reading_status": [],
              "parts_detected": [],
              "vehicle_type": "",
              "vin_reading_status": []
          }
      },
      "status": "success"
  }
    formatData(data);
    setShowModal("file");
    setLoading(false);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth =
      container.querySelector(`.${styles.useCaseItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };
  const formatData = (data) =>{
    console.log(data,"dattt")
    const imgKey = Object.keys(data.q_score)[0];

    // Extract that object
    const qData = data.q_score[imgKey];

    // Merge custom_section + selected top-level fields
    let importantValues = {
      ...qData.custom_section,
      license_reading: qData.license_reading,
      make: qData.make,
      model: qData.model,
      vehicle_type: qData.vehicle_type
    };

    importantValues = Object.fromEntries(
      Object.entries(importantValues).map(([key, value]) => [
        key,
        value === "" || value === null || value === undefined ? "null" : value
      ])
    );

    setResults(importantValues);
  }

  const prettifyKey = (key) => {
    return key
      .replace(/_/g, " ")       // replace underscores with spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
  };
  const scrollFeatures = (direction) => {
    const container = featuresScrollRef.current;
    const cardWidth =
      container.querySelector(`.${styles.blogItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleClickAnotherImage = () => {
    setShowModal(null);
    setUrls("");
    setFile(null);
    setPrevewImage(null);
  };

  const onClickGoToProduct = () => {
    if (tryProductRef.current) {
      tryProductRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      }); // 'smooth' for animated scroll
    }
  };

  const QuestionSection = ({ keyIndex, que, ans }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={styles.questionIndex}>
          {String(keyIndex + 1).padStart(2, "0")}
        </p>
        <div className={styles.question}>
          <p>{que}</p>
          <Image
            src={isOpen ? "/img/shrink-icon.svg" : "/img/expand-icon.svg"}
            alt="FAQ"
            width={36}
            height={36}
            objectFit="contain"
          />
        </div>
        <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
          {ans.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    );
  };
  const handleImgClick = (file) => {
    console.log(file);
    setFile(file);
    setPrevewImage(file);
  };

  return (
    <div className={styles.mainContainer}>
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          {showModal ? (
            <div className={styles.resultsGrid}>
              <div className={styles.showResults}>
                <h2>View Results</h2>
                <div className={styles.text}>
                  {Object.entries(results).map(([key, value]) => (
                    <div key={key} className={styles.resultItem}>
                      <span className={styles.key}>{prettifyKey(key)}</span>
                      <span className={styles.value}>{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.contactUsSection}>
                <h2>Original Image</h2>
                <div className={styles.originalImage}>
                  {showModal == "url" ? (
                    <Image
                      src={urls}
                      width={70}
                      height={70}
                      alt="Original Image"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={URL.createObjectURL(file)}
                      width={70}
                      height={70}
                      alt="Original Image"
                      unoptimized
                    />
                  )}
                </div>
                <p>
                  Get real-time feedback on vehicle image to improve damage
                  documentation and reduce assessment errors
                </p>
                <div className={styles.btnContainer}>
                  <div
                    className={styles.contactUsBtn}
                    onClick={() => (window.location.href = "/contact-us")}
                  >
                    Contact us
                  </div>
                  <div
                    className={styles.tryAnotherBtn}
                    onClick={handleClickAnotherImage}
                  >
                    Try Another Image
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <h1 className={styles.featuredTitle}>
                  Photo Quality-
                  <span className={styles.titleHighlights}>API</span>
                </h1>
                <p className={styles.featuredText}>
                  Ensure only the best vehicle photos with Inspektlabs' Photo Quality API that delivers instant feedback on photo clarity, framing,
                  and lighting. Integrate the API seamlessly with your own app for real-time recapture suggestions.
                </p>
              </div>
              <div className={styles.photoQualityBg}>
                <Image
                  src="/img/photo-api-bg-img.png"
                  alt="Outlined car"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.uploadSection}>
                <h2>
                  Upload images & get real-time feedback on picture quality
                </h2>
                <div>
                  <input
                    type="file"
                    id="upload"
                    hidden
                    onChange={(e) => handleImageList(e.target.files)}
                    accept="image/*"
                    disabled={urls.length > 0}
                  />
                  <label
                    className={`${styles.uploadButton} ${
                      urls.length > 0 ? styles.disabled : styles.active
                    }`}
                    for="upload"
                  >
                    Upload Image/Drag & Drop
                  </label>
                </div>
                <p>OR</p>
                <div className={styles.pasteImageURLBox}>
                  <input
                    type="url"
                    id="url"
                    placeholder="Paste Image/URL"
                    value={urls}
                    onChange={(e) => {
                      setUrls(e.target.value);
                      setShowAlert(false);
                    }}
                    className={`${styles.pasteImageUrl} ${
                      file != null ? styles.disableURLBox : styles.activeURLBox
                    }`}
                    disabled={file != null}
                  />
                </div>
                {showAlert && (
                  <p style={{ color: "red", fontSize: "14px" }}>
                    Please enter a valid Image URL
                  </p>
                )}
                {urls.length > 0 && (
                  <div
                  className={`${styles.submitButton} ${loading ? styles.disabled : styles.active}`}
                  onClick={!loading ? handleUrlSubmit : undefined}
                  >
                  {loading ? (
                  <span className={styles.loader}></span>
                  ) : (
                    "Submit"
                  )}
                  </div>
                )}
                {previewImage && (
                  <div
                    className={styles.inspectionImgExamples}
                    style={{ marginTop: "20px" }}
                  >
                    <Image
                      src={previewImage}
                      width={50}
                      height={50}
                      alt="Inspection Image"
                      unoptimized
                      className={styles.uploadedImage}
                    />
                    <div
                      className={`${styles.submitButton} ${loading ? styles.disabled : styles.active}`}
                      onClick={!loading ? handleFileSubmit : undefined}
                    >
                      {loading ? (
                        <span className={styles.loader}></span>
                      ) : (
                        "Submit"
                      )}
                    </div>
                  </div>
                )}
                {urls.length == 0 && file == null && (
                  <>
                    <p style={{ fontSize: "14px" }}>
                      Can't find image? Upload one of these
                    </p>
                    <div className={styles.inspectionImgExamples}>
                      <Image
                        src={"/img/inspection-img-example.svg"}
                        width={50}
                        height={50}
                        alt="inspection img example"
                      />
                      <Image
                        src={"/img/inspection-img-example.svg"}
                        width={50}
                        height={50}
                        alt="inspection img example"
                      />
                      <Image
                        src={"/img/inspection-img-example.svg"}
                        width={50}
                        height={50}
                        alt="inspection img example"
                      />
                      <Image
                        src={"/img/inspection-img-example.svg"}
                        width={50}
                        height={50}
                        alt="inspection img example"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
        {/* Photo API Section */}
        <section className={styles.photoAPISection}>
          <div className={styles.photoAPIContainer} ref={tryProductRef}>
            <div className={styles.photoAPITitleContainer}>
              <h3>Photo API</h3>
              <p>
                By integrating seamlessly into your existing workflow, the API
                ensures that all necessary details are captured-eliminating
                incomplete, unclear, or low-quality images that can impact
                decision-making.
              </p>
            </div>
            <div className={styles.photoAPIFeatures}>
              {featureData.map((data, index) => {
                return (
                  <div className={styles.featureCard}>
                    <div className={styles.featureCardImage}>
                      <Image
                        src={`/img/${data.img}`}
                        alt={data.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className={styles.featureCardHeading}>{data.title}</p>
                    <p className={styles.featureCardText}>{data.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities & Use Case Section */}
        <section className={styles.useCaseSection}>
          <div className={styles.useCaseContainer}>
            <h3>Capabilities & Use Case</h3>
            {/* <div className={styles.backgroundCarImg}>
              <Image
                src={"/img/mobile.svg"}
                layout='fill'
                objectFit="contain"
                objectPosition="center"
                alt="mobile"
              />
            </div> */}
            <div className={styles.useCasesCarouselContainer}>
              <div className={`${styles.nav} ${styles.navLeft}`}>
                <Image
                  src={"/img/nav-left.svg"}
                  width={50}
                  height={50}
                  alt="nav-left"
                  onClick={() => scroll("left")}
                />
              </div>
              <div className={styles.useCasesCaraouselContent} ref={scrollRef}>
                {useCases.map((useCase) => (
                  <div className={styles.useCaseItem} key={useCase.id}>
                    <div className={styles.useCaseImg}>
                      <Image
                        src={`/img/${useCase.img}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt={useCase.title}
                      />
                    </div>
                    <div className={styles.useCaseContent}>
                      <p className={styles.useCaseTitle}>{useCase.title}</p>
                      <p className={styles.useCaseText}>{useCase.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.nav} ${styles.navRight}`}>
                <Image
                  src={"/img/nav-right.svg"}
                  width={50}
                  height={50}
                  alt="nav-right"
                  onClick={() => scroll("right")}
                />
              </div>
            </div>
            <div
              className={styles.documentationButton}
              onClick={onClickGoToProduct}
            >
              Try the product
            </div>
          </div>
        </section>

        <section className={styles.vehiclesSupportedSection}>
          <div className={styles.vehiclesSupportedSubSection}>
            <h3 className={styles.vehicleSupportedHeading}>Works Best on</h3>
            <div className={styles.vehiclesSupportedContainer}>
              <div className={styles.carSection}>
                <h3 className={styles.vehicleName}>Car</h3>
                <Image
                  className={styles.carImg}
                  src={"/img/car-img.svg"}
                  alt="Car Image"
                  width={400}
                  height={250}
                />
              </div>
              <div className={styles.otherSupportedVehicles}>
                <div className={styles.vehicle}>
                  <div className={styles.vehicleName}>
                    <h3>Heavy - Vehicle</h3>
                    <p>Coming Soon</p>
                  </div>
                  <Image
                    className={styles.whiteTruck}
                    src={"/img/white-truck.svg"}
                    alt="White Truck"
                    width={350}
                    height={230}
                  />
                </div>
                <div className={styles.vehicle}>
                  <div className={styles.vehicleName}>
                    <h3>Motor Bike</h3>
                    <p>Coming Soon</p>
                  </div>
                  <Image
                    className={styles.whiteTruck}
                    src={"/img/bike.svg"}
                    alt="Bike"
                    width={350}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <p className={styles.vehicleSupportedText}>
              By integrating seamlessly into your existing workflow, the API
              ensures that all necessary details are captured-eliminating
              incomplete, unclear, or low-quality images that can impact
              decision-making.
            </p>
            <div
              className={styles.documentationButton}
              onClick={onClickGoToProduct}
            >
              Try the product
            </div>
          </div>
        </section>

        <section className={styles.photoAPIFeatureSection}>
          <div className={styles.photoAPIFeatureContainer}>
            <h3 className={styles.vehicleSupportedHeading}>Also Check Out</h3>
            <div className={styles.blogCaraouselContainer}>
              <div className={`${styles.nav} ${styles.navLeft}`}>
                <Image
                  src={"/img/nav-left.svg"}
                  width={50}
                  height={50}
                  alt="nav-left"
                  onClick={() => scrollFeatures("left")}
                />
              </div>
              <div
                className={styles.blogCaraouselContent}
                ref={featuresScrollRef}
              >
                {photoAPIFeatures.map((post) => (
                  <div className={styles.blogItem} key={post.id}>
                    <div className={styles.blogImg}>
                      <Image
                        src={post.img}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt={post.title}
                      />
                    </div>
                    <div className={styles.blogContent}>
                      <p className={styles.blogTitle}>{post.title}</p>
                      <p className={styles.blogText}>{post.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.nav} ${styles.navRight}`}>
                <Image
                  src={"/img/nav-right.svg"}
                  width={50}
                  height={50}
                  alt="nav-right"
                  onClick={() => scrollFeatures("right")}
                />
              </div>
            </div>
          </div>
        </section>
        
        {showContactSection && <section className={styles.redirectToContactUsSection} ref={contactUsRef}>
          <ContactUs locale={'en'} formClassName={styles.contactFormContainer} mainClassName={styles.contactUsMain} featuredClassName={styles.contactUsFeatured}/>
        </section>}

        <section className={styles.faqSectionContainer}>
          <div className={styles.faqSection}>
            <div className={styles.faqTitleContainer}>
              <h1 className={styles.faqTitle}>Commonly asked questions</h1>
            </div>
            <div className={styles.questionContainer}>
              <div className={styles.faqGrid}>
                {questions["Photo Quality API"][locale].map((item, index) => (
                  <QuestionSection keyIndex={index} que={item.Q} ans={item.A} />
                ))}
              </div>
            </div>
            <div
              className={styles.viewMoreBtn}
              style={{ width: "200px" }}
              onClick={() => (window.location.href = "/faq")}
            >
              View More
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhotoInspection;

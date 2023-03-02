import React from "react";

const FaceRecognation = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        data-src="http://127.0.0.1:5500/mfalogin/public/FaceRecognition/index.html"
        src="http://127.0.0.1:5500/mfalogin/public/FaceRecognition/index.html"
        allowFullScreen={true}
        allow="autoplay"
        data-ll-status="loaded"
        className="w-[100%] h-[90vh] lazy entered loaded"
      ></iframe>
    </div>
  );
};

export default FaceRecognation;

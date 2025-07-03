"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [extension, setExtension] = useState("");
  const publisher = extension.split(".")[0];
  const name = extension.split(".")[1];
  const [downloadUrl, setDownloadUrl] = useState(
    `https://publisher.gallery.vsassets.io/_apis/public/gallery/publisher/publisher/extension/name/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
  );

  useEffect(() => {
    if (extension) {
      setDownloadUrl(
        `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${name}/latest/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`
      );
    }
  }, [extension, publisher, name]);
  return (
    <div className="flex flex-col bg-amber-50 p-4 outline-1 outline-gray-200">
      <h1>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={() => {
            window.open(downloadUrl, "_blank");
          }}
        >
          Final URL: {downloadUrl}
        </button>
      </h1>
      <p>
        publisher: {publisher ? publisher : "Publisher ?"}
        <br />
        name :{name ? name : "Extension ?"}
      </p>
      <div className="border border-gray-300 rounded-md p-2 mb-4 width-full">
        <input
          type="text"
          id="Extension"
          required
          placeholder="Unique identifier for the extension (e.g., publisher.extension)"
          onChange={(e) => {
            setExtension(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Home;

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
    <div className="flex flex-col justify-center p-4 outline-1 outline-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        TESTING CICD 2
      </h1>
      <div className="flex flex-row border border-gray-300 rounded-md p-2 mb-4 width-full">
        <h2>
          First of all, search for the extension you want at:{" "}
          <a
            href="https://marketplace.visualstudio.com/search?target=VSCode&category=All%20categories&sortBy=Relevance"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visual Studio | Marketplace
          </a>
        </h2>
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded-md p-2 mb-4 width-full"
        id="Extension"
        required
        placeholder="Unique identifier for the extension (e.g., publisher.extension)"
        onChange={(e) => {
          setExtension(e.target.value);
        }}
      />
      <div className="my-4">
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed break-all"
          onClick={() => {
            window.open(downloadUrl, "_blank");
          }}
          disabled={!publisher || !name}
        >
          {publisher && name
            ? `Download: ${extension}`
            : "Enter extension ID to download"}
        </button>
        {extension && (
          <p className="mt-2 text-sm text-gray-600 break-all">
            <span className="font-medium">Download URL:</span> {downloadUrl}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

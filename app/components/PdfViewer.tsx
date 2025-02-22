import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // **1️⃣ Pastikan worker hanya digunakan di client-side**
  useEffect(() => {
    if (typeof window !== "undefined") {
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.mjs"; // Worker hanya untuk parsing
      setIsClient(true);
    }
  }, []);

  // **2️⃣ Atur path file PDF untuk lokal & Netlify**
  useEffect(() => {
    if (isClient) {
      const pdfPath = "/resume.pdf"; // Bisa digunakan baik di lokal maupun Netlify
      setFileUrl(pdfPath);
    }
  }, [isClient]);

  if (!isClient) {
    return <p className="text-center">Loading...</p>; // Mencegah error SSR (Server-Side Rendering)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>

      {error && <p className="text-red-500">{error}</p>}

      {fileUrl && (
        <div className="border border-gray-300 shadow-md p-2 rounded">
          <Document
            file={fileUrl} // Hanya ini yang digunakan untuk menampilkan PDF
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(error) => console.error("❌ PDF Load Error:", error)}
          >
            <Page pageNumber={pageNumber} scale={1.5} />
          </Document>
        </div>
      )}

      {numPages && (
        <p className="mt-2">
          Page {pageNumber} of {numPages}
        </p>
      )}

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
          disabled={!numPages || pageNumber >= numPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;

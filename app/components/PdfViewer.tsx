import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Atur worker agar bisa ditemukan
pdfjs.GlobalWorkerOptions.workerSrc = import.meta.env.VITE_PDF_WORKER_SRC || "/pdf.worker.mjs";



const PdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Cek apakah file tersedia sebelum merender
    const checkFileExists = async () => {
      try {
        const response = await fetch("/resume.pdf");
        if (!response.ok) throw new Error("File not found");
        setFileUrl("/resume.pdf");
      } catch (err) {
        setError("PDF file not found!");
      }
    };

    checkFileExists();
  }, []);

  if (!isClient) {
    return <p>Loading...</p>; // Menghindari SSR hydration error
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">PDF Viewer</h1>

      {error && <p className="text-red-500">{error}</p>}

      {fileUrl && (
        <Document file={fileUrl} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
          <Page pageNumber={pageNumber} scale={1.5} />
        </Document>
      )}

      <p>Page {pageNumber} of {numPages || "?"}</p>

      <div className="mt-4 flex gap-2">
        <button 
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))} 
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Previous
        </button>
        <button 
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))} 
          disabled={!numPages || pageNumber >= numPages}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;


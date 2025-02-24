import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 🔹 **Setel path PDF (pastikan file tersedia di public/)**
  useEffect(() => {
    setFileUrl("/resume.pdf"); // Pastikan file ada di folder `public/`
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-neutral">
      <h1 className="text-2xl font-bold mb-4">📄 PDF Viewer</h1>

      {error && <p className="text-red-500">❌ {error}</p>}

      {fileUrl && (
        <div className="border border-gray-300 shadow-md p-4 bg-white rounded-md">
          <Document
            file={fileUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(error) => {
              console.error("❌ PDF Load Error:", error);
              setError("Gagal memuat PDF.");
            }}
          >
            <Page pageNumber={pageNumber} scale={1.5} />
          </Document>
        </div>
      )}

      {numPages !== null && (
        <p className="mt-2">
          Halaman {pageNumber} dari {numPages}
        </p>
      )}

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          ⬅️ Sebelumnya
        </button>
        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
          disabled={!numPages || pageNumber >= numPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Selanjutnya ➡️
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;

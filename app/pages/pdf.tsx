import React, { Suspense, lazy } from "react";

const PdfViewer = lazy(() => import("../components/PdfViewer"));

const PDFPage = () => {
    return (
        <Suspense fallback={<p>Loading PDF Viewer...</p>}>
            <PdfViewer />
        </Suspense>
    );
};

export default PDFPage;

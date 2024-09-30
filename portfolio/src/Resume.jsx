// Resume.jsx
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
        <div style={{ height: '800px' }}>
          <Viewer fileUrl="./assets/document.pdf" />
        </div>
      </Worker>
    </div>
  );
}

export default Resume;

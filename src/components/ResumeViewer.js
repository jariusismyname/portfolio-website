import React, { useState, useEffect } from 'react';
import './ResumeViewer.css'; // Create this CSS file

const ResumeViewer = () => {
  const [showPdf, setShowPdf] = useState(false);
  const pdfUrl = './Jarius PDF Latest.pdf'; // Update path as needed

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeResume();
    }
  };

  const showResume = () => {
    setShowPdf(true);
    document.addEventListener('keydown', handleEscape);
  };

  const closeResume = () => {
    setShowPdf(false);
    document.removeEventListener('keydown', handleEscape);
  };

  return (
    <div className="resume-viewer-container">
      <button 
        id="resumeBtn" 
        onClick={showResume}
        className="resume-button"
      >
        View My Resume
      </button>

      {showPdf && (
        <div className="pdf-viewer" id="pdfViewer">
          <span 
            className="close-btn" 
            onClick={closeResume}
            role="button" 
            tabIndex={0}
          >
            &times;
          </span>
          <iframe 
            className="pdf-iframe" 
            id="pdfFrame" 
            title="Resume PDF" 
            src={pdfUrl}
          />
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;
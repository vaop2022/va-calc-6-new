import React from "react";

function FileContentPopup({ content , onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>Close</button>
        <pre>{content}</pre>
      </div>
    </div>
  );
}

export default FileContentPopup;

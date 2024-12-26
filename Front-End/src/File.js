import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./File.css";

const File = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/user/${userId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }
          const data = await response.json();
          setUserDetails(data);
        } catch (err) {
          setError("Failed to fetch user details. Please try again later.");
          console.error(err);
        }
      };
      fetchUserDetails();
    }
  }, [userId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const fileData = selectedFile.name;
      const payload = {
        fileData,
      };
      try {
        const response = await fetch(
          `http://localhost:8000/user/update/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to upload file data");
        }
        await response.json();
      } catch (err) {
        setError("Failed to upload file data. Please try again later.");
        console.error(err);
      }
    } else {
      setError("No file selected.");
    }
  };

  const handleFileUpdate = async (index) => {
    const payload = {
      index,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to upload file data");
      }
      await response.json();
    } catch (err) {
      setError("Failed to upload file data. Please try again later.");
      console.error(err);
    }
  };

  const handleFileDelete = async (index) => {
    const payload = {
      fileIndex: index,
    };
    try {
      const response = await fetch(
        `http://localhost:8000/user/delete/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete file data");
      }
      await response.json();
    } catch (err) {
      setError("Failed to delete file. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="file-container">
      <h1 className="title">Hello, World!</h1>
      <p className="user-id">User ID: {userId}</p>
      {userDetails ? (
        <div className="user-details">
          <h2>User Details</h2>
          <p>User Name: {userDetails.user.username}</p>
          <p>Password: {userDetails.user.password}</p>
          <p>Phone: {userDetails.user.phoneNumber}</p>

          <h3>Uploaded Files</h3>
          <ul>
            {userDetails.user.file?.map((file, index) => (
              <li key={index} className="file-item">
                <span className="file-name">{file}</span>
                <div className="file-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleFileUpdate(index)}
                  >
                    ✏️
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleFileDelete(index)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      <div className="file-upload-section">
        <h2>Upload a File</h2>
        <input type="file" className="file-input" onChange={handleFileChange} />
        <br />
        <button className="upload-button" onClick={handleFileUpload}>
          Upload File
        </button>
      </div>
    </div>
  );
};

export default File;

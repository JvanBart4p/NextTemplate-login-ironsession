import { useState } from "react";

const FileInput = ({ label, handleChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const pdfBase64 = base64
    setSelectedFile(pdfBase64);
    handleChange(null, label.name, pdfBase64);
  };

  return (
    <div className="private__form-items">
      <label> {label.label}</label>
      <input
        type="file"
        placeholder={label.name}
        required={label.rules === "required"}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
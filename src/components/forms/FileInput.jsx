const FileInput = ({ label, handleChange }) => {
  return (
    <div className="private__form-items">
      <label> {label.label}</label>
      {label.rules === "required" ? (
        <input
          type={label.type}
          placeholder={label.name}
          required={label.rules === "required"}
          onChange={(e) => handleChange(e, label.name)}
        />
      ) : (
        <input type={label.type} placeholder={label.name} />
      )}
    </div>
  );
};

export default FileInput;

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";

const Sign = ({ label, handleChange }) => {
  const [openModel, setOpenModal] = useState(false);
  const [penColor, setPenColor] = useState("black");
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef();
  const colors = ["black", "green", "red"];

  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(URL);
    setOpenModal(false);
  };

  useEffect(() => {
    handleChange(null, label.name, imageURL);
  }, [imageURL]);

  return (
    <div className="sign">
      <button onClick={() => setOpenModal(true)}>Create Signature</button>
      <br />​
      {openModel && (
        <div className="sign__modalContainer">
          <div className="sign__modal">
            <div className="sign__sigPad-penColors">
              <p>Pen Color:</p>
              {colors.map((color) => (
                <span
                  key={color}
                  style={{
                    backgroundColor: color,
                    border: `${color === penColor ? `2px solid ${color}` : ""}`,
                  }}
                  onClick={() => setPenColor(color)}
                ></span>
              ))}
            </div>
            <div className="sign__sigPadContainer">
              <SignatureCanvas
                penColor={penColor}
                canvasProps={{ className: "sign__sigCanvas" }}
                ref={sigCanvas}
              />
              <hr />
              <button onClick={() => sigCanvas.current.clear()}>Clear</button>
            </div>
            <div className="sign__modal-bottom">
              <button onClick={() => setOpenModal(false)}>Cancel</button>
              <button className="sign__modal-bottom-create" onClick={create}>
                Create
              </button>
              <br />
            </div>
          </div>
        </div>
      )}
      {imageURL && (
        <>
          <Image
            src={imageURL}
            width={100}
            height={60}
            alt="signature"
            className="sign__modal-bottom-signature"
          />
        </>
      )}
    </div>
  );
};

export default Sign;

// https://www.commoninja.com/blog/how-to-build-a-digital-signature-pad-in-react

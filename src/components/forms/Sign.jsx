import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SignatureCanvas from "react-signature-canvas";

const Sign = ({ handleChange, setSignature }) => {
  const [openModel, setOpenModal] = useState(false);
  const [penColor, setPenColor] = useState("black");
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef();
  const colors = ["black", "green", "red"];

  const create = (e) => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const base64Image = URL.replace(/^data:image\/png;base64,/, ""); // Remove the "data:image/png;base64," prefix
    setSignature(base64Image);
    setImageURL(URL);
    setOpenModal(false);

     handleSignatureChange(base64Image);
  };

  const handleSignatureChange = (signature) => {
    signature &&
    handleChange(null, "Bestand", signature);
  };


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
      <br />
      {/* <button onClick={download} style={{ padding: "5px", marginTop: "5px" }}>
        Download
      </button> */}
    </div>
  );
};

export default Sign;

// https://www.commoninja.com/blog/how-to-build-a-digital-signature-pad-in-react

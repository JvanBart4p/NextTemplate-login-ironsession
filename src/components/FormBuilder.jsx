import Sign from "./Sign";

const FormsBuilder = ({ forms }) => {
  console.log(forms)
  return (
    <div>
      {forms &&
        forms.map((item, index) => {
          return (
            <div className="private__form" key={`formtest${index}`}>
              {item.fields.length > 0 && <h2>{item.title}</h2>}
              {item.fields.map((label, i) => {
                return (
                  <div
                    className="private__form-items"
                    key={`${label.name}${i}`}
                  >
                    <label> {label.label}</label>
                    {label.type === "canvas" ? (
                      <Sign />
                    ) : (
                      <>
                        {label.rules === "required" ? (
                          <input
                            type={label.type}
                            placeholder={label.name}
                            required
                          />
                        ) : (
                          <input type={label.type} placeholder={label.name} />
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default FormsBuilder;

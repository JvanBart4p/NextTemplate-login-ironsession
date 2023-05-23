const RelationComponent = ({relaties}) => {
    console.log(relaties)
    return (
      <div>
        {relaties &&
          relaties.map((item, index) => {
            return (
              <div className="private__form" key={`formtest${index}`}>
                <h2>{item.Klantnaam}</h2>
              </div>
            );
          })}
      </div>
    );
}

export default RelationComponent;
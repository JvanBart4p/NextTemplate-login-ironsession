const Custom404 = () => {
  return (
    <section className="page404">
      <div className="page404__container">
        <div className="page404__row">
          <div className="page404__row-wrapper">
            <div className="page404__row-itemwrapper">
              <div classn="page404__row-item">
                <h1>404</h1>
              </div>

              <div className="page404__row-two">
                <h3>Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" className="page404__link">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;

const element = (
  <div className="congratulation-container">
    <h1 className="heading">Congratulations</h1>
    <div className="congratulation-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo-img"
      />
      <h1 className="heading2">Kiran</h1>
      <p className="desc">
        Vishnu Institute of computer Education and Technology
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo-img"
      />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

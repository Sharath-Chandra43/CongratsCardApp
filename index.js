const element = (
  <div className="congratsCardBg-container">
    <h1 className="CongratsHeading">Congratulations</h1>
    <div className="profileCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImage"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

import React from "react";

function WelcomePage() {
  return (
    <div class="row">
      <div class="col s6">
        <p
          class="flow-text"
          style={{
            color: "#00897b",
            fontFamily: "Lobster",
            fontSize: 50,
            marginLeft: 50,
          }}
        >
          It’s Time to Get Organized!
        </p>
        <p className="flow-text" style={{fontFamily:'TimesNewRoman', fontSize:20}}>
          Task management is the link between planning to do something and
          getting it done.
        </p>
        <p class="flow-text" style={{fontFamily:'TimesNewRoman', fontSize:20}}>Enter DoItNow: Let's get organized together!</p>
      </div>
      <div class="col s6">
        <img
          src="./images/doIt.png"
          alt="Logo"
          style={{ height: 650, width: 745, padding: 10 }}
        />
      </div>
    </div>
  );
}

export default WelcomePage;

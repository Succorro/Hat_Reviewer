import React from "react";

function Home() {
  return (
    <div className="container">
      <header className="App-header">
        <img
          src="/Images/HatShopBackground.jpg"
          className="Background"
          alt="Background"
          style={{
            maxWidth: "70%",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        />
        <h3>
          Welcome, If you're looking for great hats at amazing prices. Then
          you've come to the right place!!
        </h3>
      </header>
    </div>
  );
}

export default Home;

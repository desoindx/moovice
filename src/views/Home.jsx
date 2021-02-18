import React from "react";
import User from "./../components/User";

class Home extends React.Component {
  render() {
    return (
      <>
        <h2 className="homeTitle">Home</h2>
        <User nom="Doe" prenom="John"></User>
        <User nom="Dane" prenom="Jane"></User>
      </>
    );
  }
}

export default Home;

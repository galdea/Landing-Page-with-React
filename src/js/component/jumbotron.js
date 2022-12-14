import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const JumbotronExample = () => {
  return (
    <header>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">A warm Welcome!</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-primary" href="" role="button">
          Call to action
        </a>
      </div>
    </header>
  );
};

export default JumbotronExample;

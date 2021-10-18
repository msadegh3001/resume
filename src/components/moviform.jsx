import React from "react";
const MovieForm = ({ match }) => {
  return (
    <h1>
      MovieForm <br></br> {match.params.name}
    </h1>
  );
};

export default MovieForm;

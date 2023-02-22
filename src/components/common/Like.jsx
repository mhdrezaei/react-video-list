import React from "react";

function Like({ liked, onClick }) {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <React.Fragment>
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={onClick}
      ></i>
    </React.Fragment>
  );
}

export default Like;

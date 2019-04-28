import React from "react";
import "./DeleteBtn.css";


const DeleteBtnSmall = props => (
  <span className="delete-btn" {...props}>
    <span className="far fa-times-circle fa-lg maroon"></span>
  </span>
);

export default DeleteBtnSmall;
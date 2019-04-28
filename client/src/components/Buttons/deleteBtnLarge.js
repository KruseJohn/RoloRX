import React from "react";
import "./DeleteBtn.css";


const DeleteBtnLarge = props => (
  <span className="delete-btn" {...props}>
    <span className="far fa-trash-alt maroon"></span>
  </span>
);

export default DeleteBtnLarge;
import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/QuoraBox.css";

function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar src="https://thumbs.dreamstime.com/z/young-middle-age-senior-adult-women-s-head-seamless-pattern-background-feminist-international-mother-day-support-power-hand-drawn-161964550.jpg"/>
      </div>
      <div className="quoraBox__quora">
        <h5>Have any questions? Ask here!!</h5>
      </div>
    </div>
  );
}

export default QuoraBox;

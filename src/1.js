import React from "react";

function Mybutton(props) {
  return(
      <a href="https://www.facebook.com/turlax800">
          <button onClick={props.onSimpleClick}>{props.btn}</button>;

      </a>

  ) 

}
export default Mybutton;

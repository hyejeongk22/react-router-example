import React from "react";
import { withRouter } from "react-router-dom";

function LoginButton(props) {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
          //서버에 가서 물어본다.
          setTimeout(() => {
            //props.history.push
            props.history.replace("/"); //원래있던것을바꿔주는 redirect
          }, 500);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default withRouter(LoginButton);

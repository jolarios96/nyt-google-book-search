import React from "react";
// import { PromiseProvider } from "mongoose";


function SaveBtn(props) {
    return (
        <button
            onClick={() =>
                console.log(props.id)
            }
            // onClick={props.testEvent}
            className="btn btn-primary float-right">
            Save to List
        </button>
    );
}

export default SaveBtn; 
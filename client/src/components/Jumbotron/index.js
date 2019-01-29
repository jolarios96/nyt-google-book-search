import React from "react";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron container">
            {children}
        </div>
    );
}

export default Jumbotron;
import React from "react";

export const ButtonPages = (props) => {

    return(
        <div>
            <button className="button-welcome" onClick={props.onClick}>
                View more
            </button>
        </div>
    );
}
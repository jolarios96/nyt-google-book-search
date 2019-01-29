import React from "react";
import SaveBtn from "../SaveBtn";


function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                // console.log({ result }),
                <li className="list-group-item" key={{ result }.result.id}>
                    <img
                        alt=""
                        src={{ result }.result.volumeInfo.imageLinks.smallThumbnail}
                        className="float-left m-4 clearfix"
                    />
                    <p>Title: {{ result }.result.volumeInfo.title}</p>
                    <p>Authors: {{ result }.result.volumeInfo.authors}</p>
                    <p>{{ result }.result.volumeInfo.description}</p>
                    < SaveBtn />
                    {/* <button
                        onClick={() =>
                            console.log("something")
                        }
                        className="btn btn-primary float-right">
                        Save to List
                    </button> */}
                    <a rel="noopener noreferrer"
                        target="_blank"
                        href={{ result }.result.volumeInfo.infoLink}>
                        <button
                            className="btn btn-info float-right mr-2">
                            Click for more Info
                        </button>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ResultList;

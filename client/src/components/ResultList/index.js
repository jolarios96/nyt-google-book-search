import React from "react";
import SaveBtn from "../SaveBtn";


function ResultList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                console.log({ result }.result),
                <li className="list-group-item" key={result.id}>
                    <img
                        alt=""
                        src={{ result }.result.volumeInfo.imageLinks.smallThumbnail}
                        className="float-left m-4 clearfix"
                    />
                    <p>Title: {{ result }.result.volumeInfo.title}</p>
                    <p>Authors: {{ result }.result.volumeInfo.authors}</p>
                    <p>{{ result }.result.volumeInfo.description}</p>
                    {/* <a href={{ result }.result.volumeInfo.infoLink}>- Click for More Information -</a> */}
                    < SaveBtn/>
                    <a target="_blank" href={{ result }.result.volumeInfo.infoLink}><button className="btn btn-info float-right mr-2">Click for more Info</button></a>
                </li>
            ))}
        </ul>
    );
}

export default ResultList;

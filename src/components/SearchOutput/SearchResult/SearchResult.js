import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
// set items is all that matters in the ResultList. It is an array of objects. Only display id, etag, and volume Info. Volume info is an object that has an array of authors and a title
        <article className={classes.ResultList}>
            <h1>Title: {props.items}{props. && props.authors.map((author, index) => (
                                               <p key={index}>{author}</p>
                                           ))}
            </h1>

            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;
import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((result, index) => {
                return (
                    <SearchResult
                        key={index}

                        location={result.location}
                        name={result.location.name}
                        region={result.location.region}
                        country={result.location.country}
                        lat={result.location.lat}
                        lon={result.location.lon}
                        tz_id={result.location.tz_id}
                        localtime_epoch={result.location.localtime_epoch}
                        localtime={result.location.localtime}

                        current={result.current}
                        temp_c={result.current.temp_c}
                        temp_f={result.current.temp_f}
                        condition={result.current.condition}
                        text={result.current.condition.text}
                        wind_mph={result.current.wind_mph}
                        wind_kph={result.current.wind_kph}
                        wind_degree={result.current.wind_degree}
                        wind_dir={result.current.wind_dir}
                        pressure_mb={result.current.pressure_mb}
                        pressure_in={result.current.pressure_in}
                        precip_mm={result.current.precip_mm}
                        precip_in={result.current.precip_in}
                        humidity={result.current.humidity}e
                        cloud={result.current.cloud}
                        vis_km={result.current.vis_km}
                        vis_miles={result.current.vis_miles}
                        uv={result.current.uv}
                        gust_mph={result.current.gust_mph}
                        gust_kph={result.current.gust_kph}

                    />
                );
            })
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;
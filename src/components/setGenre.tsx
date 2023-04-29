import {getGenres} from "../functions/getGenres";
import React from "react";


const SetGenre = (props: { setGenre: Function, genre: string }) => {

    function handleGenre(event: React.ChangeEvent<HTMLSelectElement>){
        props.setGenre(event.target.value);
    }

    return (
        <div className="genreBlock">
            <select name="genre" onChange={handleGenre}>
                <option key='All' value='all'>All</option>
                {getGenres().map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default SetGenre;
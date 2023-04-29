import React from 'react';


const Search = (props: { setSearch: Function, search: string }) => {

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        props.setSearch(event.target.value)
    }

    return (
        <div className="searchBlock">
            <input type="search" onInput={handleInput} value={props.search} placeholder="search"/>
        </div>

    );
};

export default Search;
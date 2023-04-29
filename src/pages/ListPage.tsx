import React, {useState} from "react";

import books from "../data/books.json"

import Search from "../components/Search";
import ItemTable from "../components/itemTable";
import SetGenre from "../components/setGenre";

import "../assets/style/listPage.css"


const ListPage = () => {

    const [data, setData] = useState(books)
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("all")

    return (
        <div className="container">
            <div className="wrapper">
                <div className="mainBlock">


                    <div className="filter">
                        {/*filter by search world*/}
                        <Search
                            setSearch={setSearch}
                            search={search}
                        />

                        {/*filter by genre*/}
                        <SetGenre
                            setGenre={setGenre}
                            genre={genre}
                        />
                    </div>


                    {/*items*/}
                    <ItemTable
                        setData={setData}
                        data={data}
                        search={search}
                        genre={genre}
                    />
                </div>
            </div>
        </div>
    );
};


export default ListPage;
import Item from "./Item";
import React from "react";
import {Data} from "../interface/interface";


const ListBody = ({data, search, genre}:{data:Array<Data>, search:string, genre: string}) => {
    return (
        <tbody>
        {data &&
            data.map((item:Data) => {

                //check for search string
                if (search && (!item.Title.toLowerCase().includes(search.toLowerCase()) && !item.Author.toLowerCase().includes(search.toLowerCase()))) {
                    return;
                }

                if (genre!=="all"&&item.Genre!==genre){
                    return
                }

                return (
                    <Item
                        key={item.id}
                        Title={item.Title}
                        Author={item.Author}
                        PublicationDate={item.PublicationDate}
                        Genre={item.Genre}/>
                )
            })
        }
        </tbody>
    );
};

export default ListBody;
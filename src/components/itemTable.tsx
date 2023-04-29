import ListHeader from "./listHeader";
import React from "react";
import {Data} from "../interface/interface";
import ListBody from "./ListBody";


const ItemTable = ({setData, data, search, genre}:{setData: Function, data:Data[], search:string, genre:string}) => {
    return (
        <table>
            <ListHeader
                setData={setData}
                data={data}
            />

            <ListBody
                data={data}
                search={search}
                genre={genre}/>

        </table>
    );
};

export default ItemTable;
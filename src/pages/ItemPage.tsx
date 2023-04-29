import {Link} from "react-router-dom";

import {Data} from "../interface/interface"

import '../assets/style/itemPage.css'


const ItemPage = (props:Data) => {
    return (
            <div className="container">
                <div className="wrapper">
                    <div className="mainBlock">

                        <h1 className="title cursor"><Link to="/">Main page</Link></h1>
                        <div className="productBlock">

                            <div className="img">
                                <img src={require("../assets/img/"+props.img)} alt={props.Title}/>
                            </div>

                            <div className="productInfo">
                                <h2>Author: {props.Author}</h2>
                                <h3>Publication Date: {props.PublicationDate}</h3>
                                <h3>Genre: {props.Genre}</h3>
                            </div>

                        </div>
                    </div>
                    <div className="productDescription">
                        <p>{props.Description}</p>
                    </div>
                </div>
            </div>
    );
};

export default ItemPage;
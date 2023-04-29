import {Data} from "../interface/interface";
import {Link} from "react-router-dom";


const Item = (props:Data) => {
    return (
                <tr key={props.id}>
                    <td>
                        <Link to={props.Title}>
                            {props.Title}
                        </Link>

                    </td>
                    <td>{props.Author}</td>
                    <td>{props.PublicationDate}</td>
                    <td>{props.Genre}</td>
                </tr>

    );
};

export default Item;
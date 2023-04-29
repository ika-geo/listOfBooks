import {Data} from "../interface/interface";



const ListHeader = ({setData, data}:{setData:Function, data:Array<Data>}) => {

    function sortByTitle(){
        setData([...data].sort((a, b) => {
            const nameA = a.Title.toUpperCase();
            const nameB = b.Title.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }));
    }

    function sortAuthor(){
        setData([...data].sort((a, b) => {
            const nameA = a.Author.toUpperCase();
            const nameB = b.Author.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        }));
    }

    return (
        <thead>
        <tr>
            <th className="cursor" onClick={sortByTitle}>Title</th>
            <th className="cursor" onClick={sortAuthor}>Author</th>
            <th>PublicationDate</th>
            <th>Genre</th>
        </tr>
        </thead>
    );
};

export default ListHeader;
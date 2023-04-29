import ListPage from "./pages/ListPage";
import {HashRouter, Routes, Route} from "react-router-dom";

import books from "./data/books.json";

import ItemPage from "./pages/ItemPage";

import './assets/style/style.css'


function App(){
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index element={<ListPage/>}/>
                    {books.map(item =>
                        <Route key={item.id} path={item.Title} element={
                            <ItemPage
                                Title={item.Title}
                                Author={item.Author}
                                PublicationDate={item.PublicationDate}
                                Genre={item.Genre}
                                Description={item.Description}
                                img={item.img}
                            />
                        }
                        />
                    )}

                </Routes>
            </HashRouter>
        </>
    );
}

export default App;

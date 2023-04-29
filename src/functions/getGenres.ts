import books from "../data/books.json"


// get genres dynamically
export function getGenres (){
    const genres:string[] = []
    books.map(item=>{
        if (!genres.includes(item.Genre)){
            genres.push(item.Genre)
        }
    })
    return genres
}
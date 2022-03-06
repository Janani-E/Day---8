class Movie{
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        if (rating != Null){
            this.rating=rating;
        } else
        this.rating = "PG";
    }
getPG(baseMovies){
    let newArr = [];
    if (this.rating = "PG"){
     newArr.push(this.title);
    }
}
}
let m1 = new Movie ("Casino Royale","Eon Productions","PG­13");

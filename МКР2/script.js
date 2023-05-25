class Film {
    constructor(id = Number, name = String, editer = String, url = String, release = Number, boxOffice = Number) {
        this.id = id;
        this.name = name;
        this.editer = editer;
        this.url = url;
        this.release = release;
        this.boxOffice = boxOffice;
    }
}

class StringFilm extends Film {
    toString() {
        return `${super.toString()}{
            id:${this.id},
            name:${this.name},
            editer:${this.editer},
            release:${this.release},
            box office:${this.boxOffice},
        }`;
    }
}

class FilmCollection {
    constructor(items = []) {
        this.items = items;
    }

    getByRelease(release) {
        return this.items.find(film => film.release === release);
    }
}

class FilmCollectionHTML extends FilmCollection {
    constructor(items) {
        super(items);
    }

    filmToHTML(film) {
        // console.log(film.name);
        return `
            <div class="film">
                <h2>${film.name}</h2>
                <iframe width="420" height="315" src="${film.url}"></iframe>
                <div class="description">
                    <p>Автор: ${film.editer}</p>
                    <p>Рік фільму: ${film.release}</p>
                    <p>Касові збори: ${film.boxOffice}</p>
                </div>
            </div>
        `;
    }

    mount(parrent, release) {
        this.parrent = parrent;
        // console.log("Mount function work");
        let findedFilm = this.getByRelease(release);
        if (findedFilm) {
            parrent.innerHTML += this.filmToHTML(findedFilm);
        } else {
            console.log("Film not found");
        }
    }
}

let films = new FilmCollectionHTML([
    new Film(1, "Titanic", "James Cameron", "https://youtu.be/kVrqfYjkTdQ", 1997, 2257000000),
    new Film(2, "Terminator 2: Judgment Day", "James Cameron", "https://youtu.be/CRRlbK5w8AE", 1991, 519000000),
    new Film(3, "The Sawshank Redemption", "Niki Marvin", "https://youtu.be/6hB3S9bIaco", 1994, 73000000),
    new Film(4, "Avatar", "James Cameron", "https://youtu.be/CM79GTEm2ps", 2009, 2923000000)
]);


function FindFilms(){
    // console.log("Click function work");
    let startFind = Number(document.getElementById("startYear").value);
    console.log(startFind);
    let endFind = Number(document.getElementById("endYear").value);
    console.log(endFind);
    let parrent = document.getElementById("parrent");

    for(let i = startFind; i<=endFind;i++){
        // console.log("For work");
        films.mount(parrent,i);
    }
}
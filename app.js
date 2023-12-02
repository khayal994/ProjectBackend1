let numberOffilms = prompt("Neçə kinoya baxmısınız?")
const personalMovieDB = { 
    count: numberOffilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
}
let film = prompt("Axrıncı baxdığınız film ?")
let bal = prompt("Neçə bal ilə qiymətləndirirsiniz ?")
personalMovieDB.movies[film] = bal;
console.log(personalMovieDB);
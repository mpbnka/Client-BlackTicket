import { Injectable } from '@angular/core';

import { Movie } from '../movie/movie.model';

@Injectable()

export class MovieService {

    private movies: Movie[] = [
        new Movie ( 1, "Ant-Man and the Wasp", "../../../assets/images/movies/thumb/thumb_1.jpg"),
        new Movie ( 2, "Movie 3", "../../../assets/images/movies/thumb/thumb_2.jpg"),
        new Movie ( 3, "Movie 2", "../../../assets/images/movies/thumb/thumb_3.jpg"),
        new Movie ( 4, "Movie 2", "../../../assets/images/movies/thumb/thumb_4.jpg"),
        new Movie ( 5, "Movie 2", "../../../assets/images/movies/thumb/thumb_5.jpg"),
        new Movie ( 6, "Movie 2", "../../../assets/images/movies/thumb/thumb_6.jpg"),
        new Movie ( 7, "Movie 2", "../../../assets/images/movies/thumb/thumb_7.jpg"),
        new Movie ( 8, "Movie 2", "../../../assets/images/movies/thumb/thumb_8.jpg"),
        new Movie ( 9, "Movie 2", "../../../assets/images/movies/thumb/thumb_9.jpg"),
        new Movie ( 10, "Movie 2", "../../../assets/images/movies/thumb/thumb_1.jpg"),
        new Movie ( 11, "Ant-Man and the Wasp", "../../../assets/images/movies/thumb/thumb_1.jpg"),
        new Movie ( 12, "Movie 3", "../../../assets/images/movies/thumb/thumb_2.jpg"),
        new Movie ( 13, "Movie 2", "../../../assets/images/movies/thumb/thumb_3.jpg"),
        new Movie ( 14, "Ant-Man and the Wasp", "../../../assets/images/movies/thumb/thumb_1.jpg"),
        new Movie ( 15, "Movie 3", "../../../assets/images/movies/thumb/thumb_2.jpg"),
        new Movie ( 16, "Movie 2", "../../../assets/images/movies/thumb/thumb_3.jpg")
    ]

    constructor(){}

    getMovies() {
        return this.movies.slice();
    }
}
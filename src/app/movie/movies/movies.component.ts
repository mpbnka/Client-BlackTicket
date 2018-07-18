import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 /* movies: Movie[] = [
    new Movie('Movie Name 1', 1, 'movie1.jpg'),
    new Movie('Movie Name 2', 2, 'movie2.jpg'),
    new Movie('Movie Name 3', 3, 'movie3.jpg')
  ];*/
  constructor(private movieService:MovieService) { }
  private movies:Movie[];


  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  onMovieSelected(id:number){
    console.log("movie id is : " + id)
  }

}

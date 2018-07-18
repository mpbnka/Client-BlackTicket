import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  private movies:Movie[];

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  onMovieSelected(id:number){
    console.log("movie id is : " + id)
  }

}


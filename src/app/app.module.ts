import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { TheaterComponent } from './theater/theater/theater.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './movie/movies.service';
import { TheaterService } from './theater/theater.service';
import { TheaterSeatsComponent } from './theater/theater-seats/theater-seats.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieItemComponent,
    TheaterComponent,
    HomeComponent,
    TheaterSeatsComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    AppRoutingModule
  ],
  providers: [MovieService, TheaterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

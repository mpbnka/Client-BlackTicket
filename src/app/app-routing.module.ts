import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MoviesComponent } from './movie/movies/movies.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { TheaterComponent } from './theater/theater/theater.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';

const routes: Routes = [
    { path: '' , redirectTo: '/home', pathMatch: 'full'},
    { path: 'home' , component: HomeComponent},
    { path: 'movies' , component: MoviesComponent},
    { path: 'movie' , component: MovieListComponent, children: [
        { path: 'movie/:id' , component: MovieDetailComponent},
    ]},
    { path: 'theater' , component: TheaterComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
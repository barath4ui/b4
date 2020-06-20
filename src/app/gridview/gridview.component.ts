import { Component, OnInit } from '@angular/core';
import {movies} from '../moviesData';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {

 
  moviesArray = [];

  constructor() { }

  ngOnInit() {
    movies.forEach(movie => {
      fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movie.id}`, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "6e2a3ca123mshe01ff535d6eedfap14b054jsn27d8509161c1"
        }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
      // Work with JSON data here
        console.log(data)
        console.log(data.title)
        console.log(data.rating)
        console.log(data.year)
        
        this.moviesArray.push(data);
        this.moviesArray = [...this.moviesArray];
      })
    })

  }
}

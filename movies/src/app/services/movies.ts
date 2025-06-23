import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Movies {

  
  constructor(private http:HttpClient) { }
  getMoviesList(){
    //const url="https://github.com/sharmadeepesh/movies-json/blob/master/data.json";
    const url = 'https://raw.githubusercontent.com/sharmadeepesh/movies-json/master/data.json';

    return this.http.get(url)

  }

}

// 56bafd43    http://img.omdbapi.com/?apikey=[56bafd43]&

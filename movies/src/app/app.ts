import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material-module';
import { Movies } from './services/movies';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Add this
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // ✅ Add this to imports
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, // ✅ Important!
  imports: [ CommonModule,
    MaterialModule,
    HttpClientModule,
   MatCardModule,
   FormsModule ],

  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ This should be plural
 
 })
export class App {
  protected title = 'movies';

   isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  
  constructor(private movieService:Movies){}

  movieList: any[] = [];
   searchTerm: string = '';

ngOnInit() {
  this.movieService.getMoviesList().subscribe((data: any) => {
    // Parse the data if needed and assign
    this.movieList = Object.values(data).map((entry: any) => Object.values(entry)[0]);
    //console.log(this.movieList);
  });
}


  filteredMovies() {
    if (!this.searchTerm.trim()) return this.movieList;
    return this.movieList.filter(movie =>
      movie.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


onImageError(event: any) {
  event.target.src = 'https://via.placeholder.com/250x350?text=No+Image';
   event.target.alt = 'Image not available';

}

  }





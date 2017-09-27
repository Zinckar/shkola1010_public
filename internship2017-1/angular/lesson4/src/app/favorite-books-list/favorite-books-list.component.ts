import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite.model';
import { FavoriteBooksService } from '../services/favorite-books.service';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-favorite-books-list',
  templateUrl: './favorite-books-list.component.html',
  styleUrls: ['./favorite-books-list.component.css']
})
export class FavoriteBooksListComponent implements OnInit {

  favorites$: Observable<Favorite[]>;



  constructor(private favoriteBooksService: FavoriteBooksService) {

  }

  ngOnInit() {

    this.favorites$ = this.favoriteBooksService.getFavorites();

  }

}

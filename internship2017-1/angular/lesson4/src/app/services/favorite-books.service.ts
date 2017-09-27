import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Favorite } from '../models/favorite.model';
@Injectable()
export class FavoriteBooksService {
  constructor(private http: Http) {
  }

  getFavorites(): Observable<Favorite[]> {
    return this.http.get('http://localhost:3000/favorites')
      .map((response: any) => response.json());
  }
}

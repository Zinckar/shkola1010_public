import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
	declarations: [
		AppComponent,
		BooksListComponent,
		FavoriteComponent,
		HighlightDirective,
		UnlessDirective
	],
	imports: [
		BrowserModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

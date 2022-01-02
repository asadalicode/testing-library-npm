import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListGalleryModule } from 'image-list-gallery-asad'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ImageListGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

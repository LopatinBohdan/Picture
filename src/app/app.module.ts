import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureItemComponent } from './picture-item/picture-item.component';
import { PictureService } from './picture.service';

@NgModule({
  declarations: [
    AppComponent,
    PictureItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Picture } from './picture';
import { PictureService } from './picture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Picture[]=[];
  selectedPicture:Picture=this.items[0];

  onSelect(item:Picture):void{
    this.selectedPicture=item;
  }

  constructor(private pictureService:PictureService){};

  ngOnInit(){
    this.items=this.pictureService.collection;
  }
}

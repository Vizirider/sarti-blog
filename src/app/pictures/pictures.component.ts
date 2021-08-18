import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../serivces/photo.service';
import { Image } from '../pictures/pictures.model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public images: Image[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.images = this.photoService.getImages();
  }

}

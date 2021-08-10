import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_Wo9L6cO4ZzjOeHidiIn55a2qh-tjI1SvQ&usqp=CAU';
  image3 = 'https://p4.wallpaperbetter.com/wallpaper/398/416/1023/sci-fi-city-building-futuristic-city-wallpaper-preview.jpg';

  constructor() { }

  ngOnInit() {
  }

}
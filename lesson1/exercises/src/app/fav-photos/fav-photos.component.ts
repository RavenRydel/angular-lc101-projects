import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Greatest Pictures You Will Ever See In Your Entire Life';
  image1 = 'https://www.earthwonders.co/wp-content/uploads/2020/12/5-16.jpg';
  image2 = 'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/tiniest-cavalier-puppy-nessa-fb28.png';
  image3 = 'https://preview.redd.it/7d0phqpylzvz.png?auto=webp&s=c5654f9ae31af4f3ac723fb2ecdaea0fe5aa40e6';

  constructor() { }

  ngOnInit() {
  }

}
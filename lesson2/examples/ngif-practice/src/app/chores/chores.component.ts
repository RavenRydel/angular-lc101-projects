import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Something else'];

   targetImage = 'https://media.gettyimages.com/photos/cute-chameleon-looking-at-camera-picture-id697856800?s=2048x2048';

   constructor() { }

   ngOnInit() {
   }

}

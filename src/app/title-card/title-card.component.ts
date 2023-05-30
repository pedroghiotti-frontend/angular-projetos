import { Component } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css'],
  inputs: ['title', 'logoImageUrl']
})
export class TitleCardComponent {
  title:string = 'Placeholder Title';
  logoImageUrl = 'https://unsplash.it/600/200';
}

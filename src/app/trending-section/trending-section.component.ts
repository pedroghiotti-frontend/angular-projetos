import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.css'],
  inputs: [
    'articleTitle',
    'articleText',
    'imgUrl',
    'counter',
  ]
})
export class TrendingSectionComponent {
  articleTitle:string = '';
  articleText:string = '';
  imgUrl:string = '';
  counter:string = '';
}

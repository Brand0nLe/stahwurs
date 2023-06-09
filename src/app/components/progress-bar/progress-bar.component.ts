import { Component, HostListener, Input, OnInit, NgModule } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  standalone: true,
  imports: [MatProgressBarModule],
})
export class ProgressBarComponent{
//   progresValue:number;
//   rangeArray:number[];
//   constructor() { 
//    this.progresValue =0;
//    this.rangeArray= new Array(100);
//   }
//   @HostListener("window:scroll", [])
// onWindowScroll() {
//  var element = document.documentElement, 
//  body = document.body,
//  scrollTop = 'scrollTop',
//  scrollHeight = 'scrollHeight';
//  this.progresValue = 
//  (element[scrollTop]||body[scrollTop]) / 
//  ((element[scrollHeight]||body[scrollHeight]) - element.clientHeight) * 100;
// }
// ngOnInit() {
// }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allservice',
  templateUrl: './allservice.component.html',
  styleUrls: ['./allservice.component.css']
})
export class AllserviceComponent implements OnInit {

  collapsed = true;
  myDropDown : any ;
  constructor() { }

  ngOnInit(): void {
  }
  
  onHover(event): void {
    this.myDropDown.toggle();
  }

}

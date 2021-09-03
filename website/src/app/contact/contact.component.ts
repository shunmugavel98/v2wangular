import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }
  submitted =false;
  onSubmit(){
    this.submitted =true;
    console.log(this.signupForm);
  }
}

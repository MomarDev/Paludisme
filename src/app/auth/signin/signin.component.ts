import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMesssage : string;
  constructor() { }

  ngOnInit(): void {
  }
  initForm(){

  }
  onSubmit(){

  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Commune} from "../commune";
import {CommuneService} from "../sercvices/commune.service";

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss']
})
export class CommuneComponent implements OnInit {

  communeForm:FormGroup;
  commune:Commune = new Commune("","");
  message : any;
  private region: string;
  private dept: string;
  constructor(private communeService: CommuneService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }


  ajoutCommune(){
    let resp = this.communeService.addCommune(this.commune);
    resp.subscribe((data)=>this.message=data);
    console.log("test")
    console.log(this.communeForm.value['region'])
  }

}

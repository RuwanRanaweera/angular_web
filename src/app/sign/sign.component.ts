import { Component, OnInit } from '@angular/core';
import { Sign } from '../sign';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  formdata = new Sign('', '', '', '' , '', '');
  constructor() { }

  ngOnInit(): void {
  }
  signdata(){
    console.log(this.formdata);
  }

}

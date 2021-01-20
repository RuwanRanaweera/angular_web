import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new Login('', '');
  constructor() { }

  ngOnInit(): void {
  }
logdata(){
  console.log(this.form);
}

}

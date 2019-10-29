import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  angForm: FormGroup;
  error='';
  minLength = 4;
  constructor(private fb: FormBuilder, private route: Router, @Inject(LOCAL_STORAGE) private storage: StorageService ) {
    this.loginForm();
  }

  loginForm() {
    this.angForm = this.fb.group({
      Username: ['', [Validators.required , Validators.minLength(this.minLength) , Validators.maxLength(6)] ],
      Password: ['', Validators.required ],
    });
  }

  submitLoginForm(name , password){
    if(name== "admin"){
      if(password == 123) {
        this.error = '';
        this.storage.set('userName', name);
        this.route.navigate(['/home']);
      } else {
        this.error="password is wrong";
      }
    } else{
      this.error="you are not an admin"
    }
    
  }

  ngOnInit() {

  }

}

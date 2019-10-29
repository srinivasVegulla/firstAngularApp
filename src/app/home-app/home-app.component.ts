import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {
  title = 'Welcome to Practice-APP';
  userName;
  currentTime = Date.now();

  constructor(private route: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.userName = this.storage.get('userName')
    console.log(this.userName);
  }

  logout() {
    let res = confirm("Are u sure to Logout");
    if(res) {
      this.route.navigate(['/login']);
    } else {
      alert("u r not in only")
    }
  }

}

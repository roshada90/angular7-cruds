import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userInfo = this.backendService.getSessionData();
  username: string;
  password: string;
  getSessionData() {
    if (this.userInfo != undefined) {
      this.username = this.userInfo.sessionUsername;
      this.password = this.userInfo.sessionPassword;
    } else {
      alert('Login First!');
    }
  }
  goToCrud() {
    this.router.navigateByUrl('/view');
  }
  constructor(private backendService: BackendService, private router: Router) {}

  ngOnInit(): void {
    this.getSessionData();
  }
}

import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  username: string | null = null;

  constructor(public AuthService: AuthService) {}


  ngOnInit(): void {
    this.AuthService.currentUsername.subscribe(username => {
      this.username = username;
    });

  }

  logout(): void {
    this.AuthService.logout();
  }

}

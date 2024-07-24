import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  private currentUsernameSubject: BehaviorSubject<string | null>;
  public currentUsername: Observable<string | null>;

  constructor(private http: HttpClient) {
    this.currentUsernameSubject = new BehaviorSubject<string | null>(localStorage.getItem('username'));
    this.currentUsername = this.currentUsernameSubject.asObservable();
  }


  register(email: string, password: string, username: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { email, password, username })
      .pipe(tap(response => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('username', response.user.username);
        this.currentUsernameSubject.next(response.user.username);
      }));
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(tap(response => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('username', response.user.username);
        this.currentUsernameSubject.next(response.user.username);
      }));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.currentUsernameSubject.next(null);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}

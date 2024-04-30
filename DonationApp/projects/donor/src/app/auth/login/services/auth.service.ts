import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: string ;
  public isLoggedIn: boolean = false;
  private users: { username: string, password: string }[] = [
    { username: 'donor1', password: '1' },
    { username: 'donor2', password: '2' },
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('token', 'your_token_here');
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
  logout(): void {

    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

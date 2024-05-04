import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: string ;
  public isLoggedIn: boolean = false;
  private users: { username: string, password: string  ,type:string}[] = [
    { username: 'donor1', password: '1'  , type: 'donor'},
    { username: 'donor2', password: '2' ,type: 'teacher' },
    { username: 'donor3', password: '3' ,type: 'doctor' },
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('userType', user.type);
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.isLoggedIn = false;
  }
  isAuthenticated(): boolean {
    console.log(!!localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
  isTeacher(): boolean {
    return localStorage.getItem('userType') === 'teacher';
  }
  isDoctor(): boolean {
    return localStorage.getItem('userType') === 'doctor';
  }
}

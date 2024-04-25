import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { username: string, password: string }[] = [
    { username: 'admin1', password: '1' },
    { username: 'admin2', password: '2' },
    // Add more users as needed
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      return true;
    } else {
      // Authentication failed
      return false;
    }
  }

  // Other authentication-related methods like logout, change password, etc.
}

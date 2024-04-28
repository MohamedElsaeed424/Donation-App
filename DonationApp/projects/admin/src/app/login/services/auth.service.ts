import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username: string ;
  public isLoggedIn: boolean = false;
  private users: { username: string, password: string }[] = [
    { username: 'admin1', password: '1' },
    { username: 'admin2', password: '2' },
    // Add more users as needed
  ];

  public isMatchingPasswords(username:string , password:string): boolean {
    return this.users[username].password==password ;
  }

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.username = username ;
      this.isLoggedIn = true ;
      return true;
    } else {
      // Authentication failed
      return false;
    }
  }

  resetPassword(username:string ,password:string){
    const index = this.users.findIndex(user => user.username === username);
    this.users[index].password = password;
  }

  // Other authentication-related methods like logout, change password, etc.
}

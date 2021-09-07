import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  login(user: string, password: string): boolean {
    if ((user === 'korisnik' && password === '12345678') || (user === 'predragjevtic' && password === 'met3768')) {
      localStorage.setItem('username', user);
      if (user === 'predragjevtic') {
        localStorage.setItem('isAdmin', "1");
      }
      console.log("Admin" + localStorage.getItem("isAdmin"))
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.clear();
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];

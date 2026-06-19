import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // Credenciales simuladas
  private readonly validCredentials = {
    email: 'admin',
    password: 'mariory123'
  };

  constructor(private router: Router) {
    // Verificar si ya hay una sesión activa
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.isLoggedInSubject.next(isAuthenticated);
  }

  login(email: string, password: string): boolean {
    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      this.isLoggedInSubject.next(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }
}
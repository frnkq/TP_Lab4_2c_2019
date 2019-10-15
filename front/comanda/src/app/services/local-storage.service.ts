import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  SetToken(token: string): void
  {
    localStorage.setItem("bearer", token);
  }

  GetToken(): string
  {
    return localStorage.getItem("bearer");
  }

  ClearToken(): void
  {
    localStorage.removeItem("bearer");
  }
}

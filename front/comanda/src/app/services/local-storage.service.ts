import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  SetToken(bearer: string): void
  {
    localStorage.setItem("bearer", bearer);
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

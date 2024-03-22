import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.httpClient
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map((res) => res.data),
        tap(console.log)
      );
  }
}

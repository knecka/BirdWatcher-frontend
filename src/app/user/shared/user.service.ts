import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { RegistrationData } from '../register/registrationData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.url+'/'+id);
  }

  getCurrentUser(): Observable<User> {
    const userId = localStorage.getItem('userId')
    return this.http.get<User>(this.url+'/'+userId);
  }

  registerUser(registrationData: RegistrationData) {
    return this.http.post(this.url, registrationData, { headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  postFile(file: File): any {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log(formData);
    this.http.post(this.url, formData).subscribe((res) => {
      console.log(res);
    });
  }
  
  getAvatarSrc(user: User) {
    if(user && user.avatarPath) return `http://localhost:3000/${user.avatarPath}`;
    return '../../../assets/default-avatar.png';
  }
}

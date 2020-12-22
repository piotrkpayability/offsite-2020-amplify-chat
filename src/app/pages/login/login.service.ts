import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName$: Observable<string>;
  userNameSubject =  new Subject<string>();
  constructor() {
    this.userName$ = this.userNameSubject.asObservable();
  }

  login(userName): void{
    this.userNameSubject.next(userName);
  }

  logout(): void {
    this.userNameSubject.next(undefined);
  }
}

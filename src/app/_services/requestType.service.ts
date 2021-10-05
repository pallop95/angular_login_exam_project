import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {
  // private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJudgeTypeConstList(form: any)
  // : Observable<HttpEvent<any>> 
  {
    // const formData: FormData = new FormData();
    // formData.append('hqProcess', 'Y');
    // formData.append('fixSpecialCC', 'Y');


    // const req = new HttpRequest('POST', `${environment.REQUEST_SERVICE_URL}/requestType/list`, formData);
    // return this.http.request(req);
    console.log('getJudgeTypeConstList..........')
    return this.http.post<any>(`${environment.REQUEST_SERVICE_URL}/request-service/requestType/list`, { 'hqProcess': 'Y', 'fixSpecialCC': 'Y' });
            // .pipe(map(result => {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes

            //     console.log('getJudgeTypeConstList result', result);
            //     // localStorage.setItem('user', JSON.stringify(user));
            //     // this.userSubject.next(user);
            //     // return user;
            //     return result;
            // }));
  }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
}

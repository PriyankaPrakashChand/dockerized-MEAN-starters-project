import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable()
export class AppComponent {
  title = 'angular-ui';

  apiRequestForm = new FormGroup({
    requestData: new FormControl(''),
  });
  responseData: undefined;
  constructor(private http: HttpClient) {}
  submitRequest() {
    const data = this.apiRequestForm.value['requestData'];

    const response = this.http
      .get<any>('http://localhost:8000/', {
        observe: 'response',
        responseType: 'json',
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          console.log(data.body);
          this.responseData = data.body.hello;
        },
        error: (err) => {
          console.log(err);
          return 'err';
        },
      });
  }
}

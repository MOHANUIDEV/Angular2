import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService implements OnInit {
  private url = 'https://reqres.in/api/users?page=2';
  constructor(private http: Http) {

  }
  getdata() {
    return this.http.get(this.url)
      .map((res: Response) => res = res.json()).toPromise();
  }
  ngOnInit() {


  }
}

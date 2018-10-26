import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Employee } from './emplyee.model';
// import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employees: Employee[] = []
  model: any = {};
  model2: any = {};
  title: string;
  constructor(private _svc: ProductService) {
    this.title = 'Angular2 crud operation with an array';
    this.employees = [{
      name: 'jaya chandra',
      position: 'no'
    }, {
      name: 'jaya chandra',
      position: 'no'
    }];
  }
  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this._svc.getdata().then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  }
  addEmployee() {
    this.employees.push(this.model);
    console.log(this.model)
    console.log('file successfully added');
  }
  deleteemployee(i) {
    this.employees.splice(i, 1);

  }
  myvalue: any = {};
  editemployee(k) {
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myvalue = k;
  }

  updateemployee() {
    let k = this.myvalue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i == k) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }

  }
}




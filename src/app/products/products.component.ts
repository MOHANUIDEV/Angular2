import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //inputs:['parentdata']
})
export class ProductsComponent implements OnInit {
  firstname="mohan"
  savedata(value: any){
  console.log(value)
}
  constructor() { }

  ngOnInit() {
  }

}

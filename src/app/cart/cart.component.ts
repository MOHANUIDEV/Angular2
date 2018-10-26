import { Component, OnInit } from '@angular/core';
//import {FormGroup,FormControl} from '@angular/forms'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private record: string[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() { }

}

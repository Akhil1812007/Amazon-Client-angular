import { Component, OnInit } from '@angular/core';
import { productModel } from './products.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: productModel=new productModel();
  constructor( private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>{
      this.product=data;
      console.log(data);
    })
    }
  }




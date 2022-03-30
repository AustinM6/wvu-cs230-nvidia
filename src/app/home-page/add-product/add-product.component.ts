import { Component, OnInit } from '@angular/core';
import { CategoryItemModel } from '../category-item.model';
import { ProductService } from '../products.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { 

  }

  ngOnInit(): void {
  }

  addProduct(product:CategoryItemModel){
    console.log("You pressed add");
    console.log(product);
    this.ps.addProduct(product)
  }

}

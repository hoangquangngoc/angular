import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  products: Product[] = []

  constructor(private productService: ProductService) {
    // this.products = productService.products;
  }

  ngOnInit(): void {
  }
}

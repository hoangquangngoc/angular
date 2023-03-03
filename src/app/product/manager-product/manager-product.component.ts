import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manager-product',
  templateUrl: './manager-product.component.html',
  styleUrls: ['./manager-product.component.css']
})
export class ManagerProductComponent implements OnInit{
  products: Product[] = []

  formCreate!: FormGroup;

  constructor(private http: HttpClient, private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.findAlll();
  }

  product: Product = new Product(0, "", "", 0, true);

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.minLength(6)),
      img: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      price: new FormControl(0, Validators.pattern('[1-4]')),
      status: new FormControl(true)
    })
  }

  findAlll() {
    this.http.get<Product[]>('http://localhost:8080/products').subscribe(data => {
      this.products = data;
    }, error => {

    })
  }

  showEdit(product: Product) {
    this.productService.findById(product.id).subscribe((data) => {
      this.product = data;
    })
  }

  edit(formEdit: any) {
    this.productService.edit(formEdit).subscribe(() => {
      alert("edit thành công");
      this.findAlll();

    })
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      alert("xóa thành công");
      this.findAlll();
    })

  }

  create() {
    this.productService.create(this.formCreate.value).subscribe(() => {
      alert("create thành công");
      this.findAlll();
    })

  }

}

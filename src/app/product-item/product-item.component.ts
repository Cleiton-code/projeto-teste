import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

  constructor(private router: Router,
     private activeRoute: ActivatedRoute,
     private service: ProductService ){

  }
  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.loadProduct(id);
  }
  loadProduct(id: number) {
    this.service.getProductById(id).subscribe({
      next: data => alert(data.name)
    });

  }

}

import { Component } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
  {"id" : 1,
  "name": 'Computador helios 300',
  "price": 9.500,
  "category": 'Eletronico'},

  {"id" : 2,
    "name": 'Camiseta GG azul',
    "price": 450,
    "category": 'Nike'},

    {"id" : 1,
      "name": 'Copo',
      "price": 600,
      "category": 'Stantaley'},

  ]


}

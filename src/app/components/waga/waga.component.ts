import { Component } from '@angular/core';
import { Prod } from '../../models/prod';

@Component({
  selector: 'app-waga',
  templateUrl: './waga.component.html',
  styleUrl: './waga.component.css',
})
 
export class WagaComponent {
    
  sub(delta: number) {
    this.counter -= delta;
  }
  products: Prod[] = [
    { desc: 'waga', price: 7 },
    { desc: 'baga', price: 71 },
    { desc: 'milk', price: 1 },
    { desc: 'coke', price: 171 },
    { desc: 'bread', price: 17 },
    { desc: 'cake', price: 9 },
  ];
  
  counter: number = 3;
  ar: any = [1, 3, 6, 7, 8, 99];

  add(delta: number) {
    this.counter += delta;
    this.ar.push(delta);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
    <ul class="item">
  <li (click)="onSelect(product)"  *ngFor="let product of productlist">
    <span class="badge">{{product.id}}</span> {{product.name}}
  </li>
</ul>

    `,
  styles: []
})
export class ProductComponent implements OnInit {

  public productlist = [
    {"id": 1, "name": "Books"},
    {"id": 2, "name": "pens"},
    {"id": 3, "name": "Bags"},
    {"id": 4, "name": "Shirts"},
    {"id": 5, "name": "Trousers"}
  ]

  constructor(private rounter: Router) { }

  ngOnInit() {

  }

  onSelect(product){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/productlist', product.id]);
  }
}



//   public departments = [
//     {"id": 1, "name": "Angular"},
//     {"id": 2, "name": "Node"},
//     {"id": 3, "name": "MongoDB"},
//     {"id": 4, "name": "Ruby"},
//     {"id": 5, "name": "Bootstrap"}
//   ]

//   constructor(private rounter: Router) { }

//   ngOnInit() {
//   }
//   onSelect(department){
//     // from neviate from code to rooute we need router service
//     this.rounter.navigate(['/departments', department.id])
// }
// }


// <ul class="item">
// <li (click)="onSelect(department)"  *ngFor="let department of departments">
//   <span class="badge">{{department.id}}</span> {{department.name}}
// </li>
// </ul>
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) { }
  //   product: {
  //     name: string,
  //     price: number,
  //     description: string,
  //     heding1: string,
  //     heding2: string,
  //     heding3: string,
  //     headingtext: string,
  //  };
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.product = products[+param.get('productId')];
    });
  }

}

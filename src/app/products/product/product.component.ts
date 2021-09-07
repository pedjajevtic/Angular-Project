import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id: string;
  izabran = {};
  proizvodi = [
    {
      "naziv": "coca cola",
      "cena": 100
    },
    {
      "naziv": "pepsi",
      "cena": 80
    },
    {
      "naziv": "fanta",
      "cena": 90
    },
    {
      "naziv": "jabuka",
      "cena": 60
    },
    {
      "naziv": "breskva",
      "cena": 50
    }
  ];

  constructor(private route: ActivatedRoute) {
    let index;
    route.params.subscribe(params => {
      this.id = params['id'];
      index = parseInt(params['id']);
      this.izabran = this.proizvodi[index];
      console.log(this.izabran)
    });


  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-pizza-place',
  templateUrl: './pizza-place.component.html',
  styleUrls: ['./pizza-place.component.css']
})
export class PizzaPlaceComponent  implements OnInit {
  pizzaPlaces: any;
  url: string = '../../../assets/data.json';
 
  getPizzaPlaces() {
    this.http.get(this.url).subscribe(res => {
      this.pizzaPlaces = res;
    })
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getPizzaPlaces();
  }
}

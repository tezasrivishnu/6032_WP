import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import {FileService} from '../file.service';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tem:any;
  len:number;
  prods:any = [];
    constructor(private ser:ProdServiceService,
      private ser5:FileService,
      private ser1:CartService) { 
      this.len = ser1.len();
        this.ser.getProducts().subscribe((data)=>{
        console.log("Main");
        console.log(data);
        this.tem = data;
        this.loadIt();
      });
    }
  ngOnInit() {
    
    }
  cart(val){
    this.ser1.set(val);
    this.len = this.ser1.len();
  }
  loadIt() {
    for(var i = 0; i < this.tem.length; i++) {
        this.prods.push(this.tem[i].name);
    }
    console.log(this.prods);
  }
}
@Pipe({name: 'filterBy'})
export class filterNames implements PipeTransform {
  transform(listOfNames: string[], nameToFilter: string): string[] {
    if(!listOfNames) return null;
    if(!nameToFilter) return listOfNames;
    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }
}
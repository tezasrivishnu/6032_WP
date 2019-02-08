import { Component, OnInit, Input } from '@angular/core';
import {FileService} from '../file.service';
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  in:any;
  tem:any;
  len:number;
  rat:number = 0;
  flag;
  constructor(private service:FileService,
    private ser:ProdServiceService,
    private route: ActivatedRoute,private ser1:CartService) { 
      this.len = ser1.len();
      this.in = +this.route.snapshot.paramMap.get('i');
      // console.log(this.in)
      this.ser.getProducts().subscribe((data)=>{
        console.log("Main");
        console.log(data);
        this.tem = data;
        for(var i = 0;i<this.tem[this.in].reviews.length;i++){
          this.rat += this.tem[this.in].reviews[i].rating;
        }
        this.rat = this.rat / this.tem[this.in].reviews.length;
      });
      console.log(this.in);
      
  }
  ngOnInit() {
   console.log(this.in);
  }
  cart(val){
    this.ser1.set(this.tem[val]);
    this.len = this.ser1.len();
  }
  review() {
    this.flag= true;
  }

}

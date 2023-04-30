import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Services/data/data.service';


@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
 count=0;
 value=0;
 message:string="sample"
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.myData=this.message
  }
 
  
  increase(){
    this.count+=1;
    this.value=this.count;
    this.data.num=this.value;
   
    console.log(this.value)
  }
}

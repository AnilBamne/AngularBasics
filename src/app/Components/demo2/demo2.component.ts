import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
@Input() list: any
status:any;
isTrue:boolean=true;
text:any
array:any=["abd","sdfs","asfer","safre"]
  constructor() { }

  ngOnInit(): void {
    if(this.isTrue==true){
      this.status="Active"
    }
    else{
      this.status="NotActive"
    }
  }

  changeStatus(){
    this.isTrue=!this.isTrue
  }
}

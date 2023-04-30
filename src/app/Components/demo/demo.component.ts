import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
input:any
inputArray:any=[];
clicked=false;

constructor() { }

  ngOnInit(): void {
    // this.store();
  }

  store(input:any){
    this.inputArray.push(input);
  }
  actionMethod(){
    this.clicked=!this.clicked
    console.log("disable button : "+this.clicked)
  }
  actionMethod2(event: any) {
    event.target.disabled = true;
  }
  submit(){
    console.log('submitted');
  }
}

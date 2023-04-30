import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SiblingComponent } from '../sibling/sibling.component';
import { ChildComponent } from '../child/child.component';
import { DataService } from 'src/app/Services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,AfterViewInit {
  data:any
  array:any=[]
  recievedMessage:any
  dataFromChild:string="";
  dataFromSib=0;
  fruits:any=["mango","banana","apple","orange"];
  ss:string=""
  show:boolean=true;

  @ViewChild(ChildComponent) child !: ChildComponent
  constructor(public dataService:DataService) {
    
   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.dataFromChild=this.child.devName
    console.log(this.dataFromChild)
    this.dataFromSib=this.dataService.num;
    console.log(this.dataService.num)
  }
  onSubmit(data:any){
    this.array.push(data)
    
  }
  recieveData($event:any){
this.recievedMessage=$event
  }

  controleChind(){
    this.child.clickMe();
    console.log("check child")
  }
  showChild(){
    this.show=!this.show
  }
 
}
 


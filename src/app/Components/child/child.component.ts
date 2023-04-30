import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges ,OnDestroy{
  @Input() inputData:any
  @Output() childEvent=new EventEmitter<string>()
   message:any
   childData:any
   mess:string="";
   devName:string="Anil Bamne"
   isTrue:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    //this hook executes when the data coming from parent changes
    console.log("OnChanges called")
    
  }
  ngOnDestroy(){
    console.log("On changes")
  }

  onSubmit(message:any){
    this.message=message;
    this.childEvent.emit(message)
  }
  clickMe(){
    this.isTrue=!this.isTrue
  }
}

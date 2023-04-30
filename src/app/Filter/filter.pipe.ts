import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
filterValue="anil";
  transform(value:any,filterValue:any){
    
      return null;
    
  }
 
}

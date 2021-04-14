import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(data: any, ...args: any[]): any {
    
   
    if(args[0] == "" || args[0]== undefined){
      return data;
    }
    let tmp  = parseInt(args[0]); 
    if(isNaN(tmp)){ 
      return data.filter(obj=>obj.name.toLowerCase().indexOf(args[0]) == 0);
    }else{ 
      let age = parseInt(args[0]);//string to number 
      return data.filter(o=>o.age < age);
    }
    //filter will return the aray based on condition.
    
  }
/*
for(obj in  aray){
  if(obj >11){

  }
}
*/
}

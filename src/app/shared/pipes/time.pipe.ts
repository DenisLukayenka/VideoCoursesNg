import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let minutes: number = 0;
    let hours: number = 0;
    let time: string = "";

    minutes = value % 60;
    value -= minutes;

    while(value > 0) {
      value -= 60;
      hours++;
    }

    if(hours > 0){
      time += `${hours}h `;
    }

    if(minutes > 0){
      time += `${minutes}min`
    }
    
    return time;
  }
}

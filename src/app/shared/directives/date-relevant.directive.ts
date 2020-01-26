import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateRelevant]'
})
export class DateRelevantDirective {

  @Input('appDateRelevant') public creationDate: Date;
  private differenceInDate: number = 14;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    let currentDate = new Date();
    let subDate = new Date(currentDate);
    subDate.setDate(subDate.getDate() - this.differenceInDate);

    if(this.creationDate < currentDate && this.creationDate >= subDate){
      this.element.nativeElement.style.boxShadow = '-3px -3px 7px 0px rgba(127,189,143,0.8)';
      this.element.nativeElement.style.borderColor = '#bad6c1';
      this.element.nativeElement.style.borderRadius = '5px';
    } else if(this.creationDate > currentDate) {
      this.element.nativeElement.style.boxShadow = '-3px -3px 7px 1px rgba(133,176,199,1)';
      this.element.nativeElement.style.borderColor = '#9fbccc';
      this.element.nativeElement.style.borderRadius = '5px';
    }
  }
}

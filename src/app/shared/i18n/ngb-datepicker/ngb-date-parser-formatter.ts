import { Injectable } from "@angular/core";
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {

  constructor(private datePipe: DatePipe) {
    super();
  }

  parse(value: string): NgbDateStruct {
    // @TODO
    // if (value) {
    //   const dateParts = value.trim().split("/");
    //   if (dateParts.length === 1 && isNumber(dateParts[0])) {
    //     return { day: toInteger(dateParts[0]), month: null, year: null };
    //   } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
    //     return {
    //       day: toInteger(dateParts[0]),
    //       month: toInteger(dateParts[1]),
    //       year: null
    //     };
    //   } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
    //     return {
    //       day: toInteger(dateParts[0]),
    //       month: toInteger(dateParts[1]),
    //       year: toInteger(dateParts[2])
    //     };
    //   }
    // }
    return null;
  }

  format(date: NgbDateStruct): string {
    if (!date || !isNumber(date.day)) {
      return '';
    }
    let dateObject = new Date(`${date.year}-${date.month}-${date.day}`);
    let str = this.datePipe.transform(dateObject, 'd MMMM, y');
    return str;
  }
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}
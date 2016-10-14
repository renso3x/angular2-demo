import { Injectable } from '@angular/core';

@Injectable()
export class LogserviceService {

  constructor() { }

  doLog(value: string) {
  	console.log(value);
  }
}

import { Injectable, EventEmitter } from '@angular/core';

import { LogserviceService } from './logservice.service';

@Injectable()
export class DataService {
	pushedValue = new EventEmitter<string>();
	constructor(private logService: LogserviceService) {}

	private data: string[] = [];

	store(val: string) {
		this.data.push(val);
		this.logService.doLog(val);
	}

	getData() {
		return this.data;
	}

	watchValue(val: string) {
		this.pushedValue.emit(val);
	}
}

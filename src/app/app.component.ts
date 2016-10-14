import { Component, OnInit } from '@angular/core';

import { LogserviceService } from './logservice.service';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
	private hide = true;
	private items = [1,2,3,4,5,6];
	private value = 50;
	private logs:string[] = [];
	private status;

	constructor(private loggin:LogserviceService, private data: DataService) {}

	hideText() {
		this.hide = !this.hide;
	}

	logMe(val:string) {
		this.data.store(val);
	}

	getLogs() {
		this.logs = this.data.getData();
	}

	send(val: string) {
		//send value to a service
		this.data.watchValue(val);
	}

	ngOnInit() {
		// subscribe the new val from the service
		this.data.pushedValue.subscribe(newVal => this.status = newVal);
	}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-databinding',
	templateUrl: './databinding.component.html',
	styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@Input() result = 0;

	person = {
		name: 'Romeo',
		age: 22
	}

}

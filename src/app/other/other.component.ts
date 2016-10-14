import { Component } from '@angular/core';

@Component({
	selector: 'app-other',
	templateUrl: './other.component.html',
	styleUrls: ['./other.component.css']
})
export class OtherComponent {

	name = 'Romeo Enso';
	age = 22;
	isRed = true;

	clickedMe() {
		alert('Yeha!');
	}
	
	onClicked(value: string) {
		alert(value);
	}
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-eventbinding',
	templateUrl: './eventbinding.component.html',
	styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
	@Output() clicked = new EventEmitter();

	onClicked() {
		this.clicked.emit('It Works!');
	}
}

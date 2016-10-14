import { Directive, Renderer, ElementRef, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
	selector: '[apphighlight]'
})
export class HighlightDirective {

	@HostListener('mouseenter') mouseover() {
		return this.backgroundColor = this.highlighColor;
	};

	@HostListener('mouseleave') mouseleave() {
		return this.backgroundColor = this.defaultColor;
	};

	@HostListener('click', ['event']) click(event) {
		alert('boom');
	};

	@HostBinding('style.backgroundColor') get setColor() {
		return this.backgroundColor;
	};

	@Input() defaultColor = 'white';
	@Input() highlighColor = 'white';

	private backgroundColor: string; //declare variable

	constructor(private elemRef: ElementRef, private renderer: Renderer) { 
		// this.elemRef.nativeElement.style.backgroundColor = 'green';
		this.renderer.setElementStyle(this.elemRef.nativeElement, 'background-color', 'red');
	}

	OnInit() {
		this.backgroundColor = this.defaultColor;
	}
}

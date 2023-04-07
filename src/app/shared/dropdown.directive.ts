import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.open = this.elRef.nativeElement.contains(event.target) ? !this.open : false;
  }
}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMoleDisplay]'
})
export class MoleDisplayDirective {


  constructor(private eleRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('click') handleClick(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'display', 'none')
  }

}

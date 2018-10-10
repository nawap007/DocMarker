import { Component, OnInit, ElementRef } from '@angular/core';


const CSS_CLASS_HIDDEN = 'sidenav';
const CSS_CLASS_VISIBLE = 'sidenav sidenav--in-view';

@Component({
  selector: 'main-navigation-bar',
  templateUrl: './main-navigation-bar.html',
  styleUrls: ['./main-navigation-bar.scss']
})
export class MainNavigationBarComponent implements OnInit {

  private isActive: boolean;
  public selfElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.selfElement = elementRef.nativeElement;
    // this.selfElement.className = CSS_CLASS_VISIBLE;
  }

  public toggle(event: MouseEvent) {
    const element: HTMLElement = document.getElementById('nav') as HTMLElement;
    this.isActive = !this.isActive;
    element.className = this.isActive ? CSS_CLASS_VISIBLE : CSS_CLASS_HIDDEN;
  }

  public ngOnInit() {

  }

}

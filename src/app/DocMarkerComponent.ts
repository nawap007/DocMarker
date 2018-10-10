import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainNavigationBarComponent } from './mainnavigationbar/MainNavigationBarComponent';


@Component({
  selector: 'doc-marker',
  templateUrl: './doc-marker.html',
  styleUrls: ['./doc-marker.scss']
})
export class DocMarkerComponent {
  title = 'DocMarker';
  @ViewChild(MainNavigationBarComponent) navBar: MainNavigationBarComponent;

  public toggle(event: MouseEvent) {
    this.navBar.toggle(event);
  }

}

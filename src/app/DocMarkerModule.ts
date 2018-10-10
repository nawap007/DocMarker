import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DocMarkerComponent } from './DocMarkerComponent';
import { MainNavigationBarComponent } from './mainnavigationbar/MainNavigationBarComponent';
import { WorkspaceComponent } from './workspace/WorkspaceComponent';

@NgModule({
  declarations: [
    DocMarkerComponent,
    MainNavigationBarComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DocMarkerComponent]
})
export class DocMarkerModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.html',
  styleUrls: ['./workspace.scss'],
  host: {'[class.tp-workspace]': 'true'}
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lanuch-list',
  templateUrl: './lanuch-list.component.html',
  styleUrls: ['./lanuch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanuchListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

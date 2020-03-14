import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-box-component',
  templateUrl: './input-box-component.component.html',
  styleUrls: ['./input-box-component.component.scss']
})
export class InputBoxComponentComponent implements OnInit {

  @Input() receivedLabel;
  @Input() receivedType;
  @Input() receivedName;
  @Input() receivedId;
  @Input() receivedPlaceholder;

  constructor() { }

  ngOnInit(): void {
  }

}

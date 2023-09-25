import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input() date: String = '';
  @Input() title: String = '';
  @Input() url: string = '';
  @Input() detail: String = '';
  @Input() isHighlighted: String = "false";
  @Input() id: String = ''
}

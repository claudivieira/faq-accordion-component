import { Component, Input, OnInit } from '@angular/core';
import { AccordionItemModel } from './accordion-item.model';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  @Input() accordionItems: AccordionItemModel[];

  selectedItem: string;
  isActive = false;

  constructor() {}

  ngOnInit(): void {}

  onToggle(item: AccordionItemModel) {
    this.selectedItem = this.selectedItem === item.id ? null : item.id;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { AccordionPanelComponent } from "app/accordion-panel/accordion-panel.component";
import { AccordionService } from "app/accordion.service";

@Component({
  selector: 'dtk-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent  {

  /** if `true` expanding one item will close all others */
  @Input() public closeOthers: boolean;

  protected groups: AccordionPanelComponent[] = [];

  public constructor(config: AccordionService) {
    Object.assign(this, config);
  }

  public closeOtherPanels(openGroup: AccordionPanelComponent): void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group: AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group: AccordionPanelComponent): void {
    this.groups.push(group);
  }

  public removeGroup(group: AccordionPanelComponent): void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
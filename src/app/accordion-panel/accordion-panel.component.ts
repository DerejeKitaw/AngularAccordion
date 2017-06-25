import { Component, OnInit, OnDestroy, Input, HostBinding, Inject } from '@angular/core';
import { AccordionComponent } from "app/accordion/accordion.component";

import { isBs3 } from '../../utils/ng2-bootstrap-config';
@Component({
  selector: 'dtk-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  /** Clickable text in accordion's group header, check `accordion heading` below for using html in header */
  @Input() public heading: string;
  /** Provides an ability to use Bootstrap's contextual panel classes (`panel-primary`, `panel-success`, `panel-info`, etc...). List of all available classes [available here](http://getbootstrap.com/components/#panels-alternatives) */
  @Input() public panelClass: string;
  /** if <code>true</code> — disables accordion group */
  @Input() public isDisabled: boolean;

  // Questionable, maybe .panel-open should be on child div.panel element?
  /** Is accordion group open or closed */
  @HostBinding('class.panel-open')
  @Input()
  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  public get isBs3(): boolean {
    return isBs3();
  }

  protected _isOpen: boolean;
  protected accordion: AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit(): any {
    this.panelClass = this.panelClass || 'panel-default';
    this.accordion.addGroup(this);
  }

  public ngOnDestroy(): any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event: Event): any {
    console.log(Event);
    console.log(this);
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
}
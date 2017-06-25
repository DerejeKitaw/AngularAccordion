import { Injectable } from '@angular/core';

@Injectable()
export class AccordionService {
/** Whether the other panels should be closed when a panel is opened */
  public closeOthers: Boolean = false;
  constructor() { }

}

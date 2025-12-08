import { Component, Input } from '@angular/core';
import { ProfileHistory } from 'src/app/interfaces/profile-details';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
    //career timeline
    @Input() history: ProfileHistory[] = [];
    
    alternate: boolean = true;
    toggle: boolean = true;
    color: boolean = false;
    size: number = 60;
    expandEnabled: boolean = true;
    contentAnimation: boolean = true;
    dotAnimation: boolean = true;
    side = 'left';

    constructor(){

    }

    ngOnInit(){

    }

    onHeaderClick(event: any) {
      if (!this.expandEnabled) {
        event.stopPropagation();
      }
    }

    onDotClick(event: any) {
      if (!this.expandEnabled) {
        event.stopPropagation();
      }
    }

    onExpandEntry(expanded: any, index: any) {
      console.log(`Expand status of entry #${index} changed to ${expanded}`)
    }

    toggleSide() {
      this.side = this.side === 'left' ? 'right' : 'left';
    }
      
    removeEntry() {
      this.history.pop();
    }
}

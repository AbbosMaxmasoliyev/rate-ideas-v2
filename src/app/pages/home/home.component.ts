import { Component, inject, signal } from '@angular/core';
import { NavbarComponent, AccordionListComponent, TabComponent, ITabData } from '@shared';
import { FormsModule } from '@angular/forms';
import { IdeasStore } from '../../store/ideas/ideas.store';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, TabComponent, FormsModule, AccordionListComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  tabs = signal([
    { label: 'Tab 1', id: 1 },
    { label: 'Tab 2', id: 2 },
  ]);
  activeTab = signal<string>('');

  onTabsChange(tab: ITabData): void {
    this.activeTab.set(tab.label);
  }
}

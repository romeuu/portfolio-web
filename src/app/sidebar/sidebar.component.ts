import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, JobComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

import { Component } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

}

import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

}

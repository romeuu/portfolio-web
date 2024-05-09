import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewportScroller } from "@angular/common";
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/']);
  }
}

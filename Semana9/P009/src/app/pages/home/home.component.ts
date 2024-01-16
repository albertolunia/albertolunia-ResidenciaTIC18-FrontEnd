import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
    
    goToP005(): void {
      this.router.navigate(['/wiki']);
    }

    goToP006(): void {
      this.router.navigate(['/p006']);
    }

    goToP008(): void {
      this.router.navigate(['/p008']);
    }

}

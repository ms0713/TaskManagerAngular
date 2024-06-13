import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskManager';
  constructor(public loginService: LoginService, private domSanitizer: DomSanitizer)
  {
  }
}

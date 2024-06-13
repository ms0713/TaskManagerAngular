import { Component } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router) 
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe(
      ((response) =>
      {
        this.router.navigateByUrl("/dashboard");
      }
    ),
    ((error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      })
    );
  }
}

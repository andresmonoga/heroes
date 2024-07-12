import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging-page',
  templateUrl: './loging-page.component.html',
  styles: ``
})
export class LogingPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,

  ){}

  onLogin():void {

    this.authService.login('andres@gmail.com', '123456')
    .subscribe( user =>{

      this.router.navigate(['/'])

    })
  }

}

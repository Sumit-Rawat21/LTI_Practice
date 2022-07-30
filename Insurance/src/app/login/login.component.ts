import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  mail:string=''
  password:string=''
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(email:string,pass:string){
    this.mail=email
    this.password=pass
    if(this.mail=='admin' && this.password=='admin')
    this.router.navigateByUrl('admin');
    else
    this.router.navigate(['user'])
  }
}

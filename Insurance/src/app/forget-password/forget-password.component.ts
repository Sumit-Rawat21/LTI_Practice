import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  mail:string=''
  captcha:string=''
  password:string=''
  customer:Customer={
    name:'',
    email:'',
    contactNumber:'',
    address:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:''
  }
  constructor(private cs:CustomerService) { 
    this.captcha=''
  }

  ngOnInit(): void {
  }
  submit(email:string){
    this.mail=email
    this.cs.getUser(this.mail).subscribe((data:Customer)=>(this.customer=data))
    this.password=this.customer.password
  }
  resolved(captchaResponse:string){
    this.captcha=captchaResponse;
  }

}

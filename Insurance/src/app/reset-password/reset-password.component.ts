import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  mail:string=''
  password:string=''
  cpass:string=''
  customer:Customer={
    name:'',
    email:'',
    contactNumber:'',
    address:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:''
  }
  constructor(private cs:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  reset(email:string,pass:string,cpass:string){
    this.mail=email
    this.password=pass
    this.cpass=cpass
    this.cs.getUser(this.mail).subscribe((data:Customer)=>{this.customer=data})
    if(this.password==this.cpass)
    {
      this.customer.password=this.password
      this.cs.editUser(this.customer).subscribe(()=>{
        alert("Record Updated Successfuly")
        this.router.navigate(['login'])
    })
  }
    else{
      alert("Please enter password again!!")
      this.router.navigate(['reset'])
    }
}

}

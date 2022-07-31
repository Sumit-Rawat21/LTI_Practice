import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Ivehicle } from '../ivehicle';
import { Policy } from '../policy';
import { PolicyService } from '../policy.service';
import { VehicleService } from '../vehicle.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  email:string=''
  user_id:number=0
  rnumber:string=''

  customer:Customer={
  id:0,
  name:'',
  email:'',
  contactNumber:'',
  address:'',
  dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
  password:''}
  

  policy:Policy={
    id:0,
    user_id:0,
    plans_id:0,
    claim_id:0,
    purchase_date:new Date(1000, 0, 0, 0, 0, 0, 0),
    registration_number:'',
    renew_amount:0
  }

  vdetails:Ivehicle={
    ManufacturerName:'',
    Model:'',
    License:'',
    PurchaseDate:new Date(1000, 0, 0, 0, 0, 0, 0) ,
    RegistrationNumber:'',
    EngineNumber:'',
    ChassisNumber:'',
    Typeofvehicle:''

  }
  constructor(private router:Router,private cs:CustomerService,private activateroute:ActivatedRoute,private p:PolicyService,private vs:VehicleService) { }

  ngOnInit(): void {
    const temail=this.activateroute.snapshot.paramMap.get('email')
    this.email=String(temail)
    this.cs.getUser(this.email).subscribe((data:Customer)=>{this.customer=data})
    this.user_id=this.customer.id
    this.p.getPolicy(this.user_id).subscribe((data:Policy)=>{this.policy=data})
    this.rnumber=this.policy.registration_number
    this.vs.getvehicle(this.rnumber).subscribe((data:Ivehicle)=>{this.vdetails=data})
  }
   claim(){
    this.router.navigate(['Iclaim/',this.email]);
   }
   renew(){
    this.router.navigateByUrl('Irenew');
   }
}

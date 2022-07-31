import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { PolicyService } from '../policy.service';
import { Policy } from '../policy';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iclaim',
  templateUrl: './iclaim.component.html',
  styleUrls: ['./iclaim.component.css']
})
export class IclaimComponent implements OnInit {
  claim_id:number=0
  policy_id:number=0
  mobile:number=0
  reason:string=''
  isapproved:boolean=false
  claim:Claim={
    id:0,
    claim_date:new Date(1000, 0, 0, 0, 0, 0, 0),
    isApproved:false
  }
  policy:Policy={
    id:0,
    user_id:0,
    plans_id:0,
    claim_id:0,
    purchase_date:new Date(1000, 0, 0, 0, 0, 0, 0),
    registration_number:'',
    renew_amount:0
  }

  constructor(private cs:ClaimService,private ps:PolicyService,private route:Router) { }

  ngOnInit(): void {
  }
 claim_date:Date=new Date(1000, 0, 0, 0, 0, 0, 0)

submit(c:Claim,p:number){
  this.policy_id=p
  this.claim=c
  this.cs.claim(this.claim).subscribe(()=>{
    alert("Ticket Generated")
  })
  this.cs.getlatest().subscribe(data=>{this.claim=data})
  this.claim_id=this.claim.id
  this.ps.getPolicy(this.policy_id).subscribe((data:Policy)=>{this.policy=data})
  this.policy.claim_id=this.claim_id
  this.ps.editPolicy(this.policy).subscribe(()=>{
    this.route.navigate([''])
  })
}

}

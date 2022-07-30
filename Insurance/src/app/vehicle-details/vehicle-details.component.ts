import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 submit(){
this.route.navigateByUrl('Ibuy/vdetails/plans')
 }
}

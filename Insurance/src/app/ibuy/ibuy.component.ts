import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ibuy',
  templateUrl: './ibuy.component.html',
  styleUrls: ['./ibuy.component.css']
})
export class IbuyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  saveCust(){
    this.route.navigateByUrl('Ibuy/vdetails')
  }

}

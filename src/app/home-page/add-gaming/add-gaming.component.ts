import { Component, OnInit } from '@angular/core';
import { GamingItemModel } from '../gaming-list.model';
import { GamingService } from '../gaming.service';

@Component({
  selector: 'fm-add-gaming',
  templateUrl: './add-gaming.component.html',
  styleUrls: ['./add-gaming.component.css']
})
export class AddGamingComponent implements OnInit {

  constructor(private ps:GamingService) { 

  }

  ngOnInit(): void {
  }

  addGaming(gaming:GamingItemModel){
    console.log("You pressed add gaming");
    console.log(gaming);
    this.ps.addGaming(gaming)
  }

}
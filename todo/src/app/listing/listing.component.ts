import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  todos = [];
  constructor(private dialog:MatDialog) { 
    this.todos = [
      {
        title : "title1",
        description : "desc1",
        date : new Date()
      },
      {
        title : "title2",
        description : "desc2",
        date : new Date()
      },
      {
        title : "title3",
        description : "desc3",
        date : new Date()
      },
    ]
  }

  ngOnInit(): void {
  }
 addtodo()
 {
   this.dialog.open(AddComponent)
 }


}

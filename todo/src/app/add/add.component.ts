import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title="Add ToDo"
  addForm = this.fb.group({
    title : ['',Validators.required],
    description : ['',Validators.required],
    date :['',Validators.required]
  })
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(!this.addForm.valid)
    {
       alert("fill all the details");
    }
    this.dialogRef.close();
  }
  getError(field)
  {
    return (this.addForm.get(field).touched||this.addForm.get(field).dirty)&&this.addForm.get(field).errors
  }

}

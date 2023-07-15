import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    private serviceService: ServiceService
  ) {
    console.log(this.data)
  }

  ngOnInit() {
  }
  update(){
    console.log(this.data)
    // console.log(this.updateForm)
    this.serviceService.updateChemical(this.data.id, this.data.description).subscribe((res:any)=>{
      this.dialogRef.close(true)
    })
  }
}

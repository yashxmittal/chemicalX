import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  chemical :any
  totalRecords = 0
  size :any
  pageIndex : any

  constructor(private route: ActivatedRoute, private serviceService: ServiceService,  public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router ){ }
  ngOnInit() {
     this.fetchChemicalById();
  }

  fetchChemicalById(){
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceService.fetchChemicalById(id).subscribe((res:any) => {
      this.chemical = res.details;
      console.log(this.chemical)
    })
  }


  openUpdateDialog(e:any, chemicals:any) {
    this.dialog.open(DialogBoxComponent, {
      width: '750px',
      data: this.chemical
    }).afterClosed().subscribe((res:any)=>{
      if(res){
        this.openSnackBar("Updated Succesfully!");
        this.fetchChemicalById();
      }
    });
    e.stopPropagation();
  }

  openSnackBar(message:string) {
    this._snackBar.open(message, "Close", {
      duration: 5 * 1000,
      verticalPosition: "top"
    });
  }

  delete(e:any, id:any){
    this.serviceService.deleteChemical(id).subscribe((res:any)=>{
      alert('successfully deleted the chemical and now redirecting to home page')
      this.router.navigateByUrl('')
    })
  }
}

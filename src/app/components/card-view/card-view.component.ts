import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit{
  chemical :any = []
  pageIndex = 0
  pageSizeOptions = [5, 10, 25, 50]
  size = 5
  totalRecords = 0
  pageEvent! : PageEvent
  constructor ( 
              private apiService : ServiceService
  ) {}

  ngOnInit() {
    this.fetchChemicals();
  }
  
  fetchChemicals(){
    this.apiService.fetchChemicals(this.pageIndex + 1, this.size).subscribe((res:any) => {
      this.chemical = res.details.rows;
      this.totalRecords = res.details.count;
      console.log(res);
    })
  }

  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.totalRecords = e.length;
    this.size = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.fetchChemicals();
  }
}

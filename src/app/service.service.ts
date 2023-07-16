import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  
  fetchChemicals(page:number, size:number){
    console.log("yash2")
    return this.http.get<any>(`${this.backendUrl}?page=${page}&size=${size}`);
  }

  fetchChemicalById(id:any){
    return this.http.get<any>(`${this.backendUrl}/${id}`);
  }

  updateChemical(id:any, updatedData:any){
    return this.http.patch<any>(`${this.backendUrl}/${id}`,{description:updatedData});
  }

  deleteChemical(id:any){
    return this.http.delete<any>(`${this.backendUrl}/${id}`);
  }
}

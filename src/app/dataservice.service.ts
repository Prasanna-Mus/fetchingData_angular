import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
public userName=new BehaviorSubject<any>(undefined);
  constructor() { }
  getData(){
    // this.userName.next('Prasanna.');
   // this.userName.error('Data not released');
    //this.userName.complete();
     this.userName.next('Prasanna.')
     this.userName.next('laxmi')
  }
}

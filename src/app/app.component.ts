import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fetchingData';

  constructor(private data: DataserviceService){}
  myObservable={
    next:(data:any)=>{
      console.log('relased data is:',data);
    },
    error:(error:any)=>{
      console.log('Errors data:',error);
      
    },
    complete:()=>{
      console.log('completed ur subscription');
    }
  }

  ngOnInit(): void {
   
    this.data.userName.subscribe(this.myObservable);
    this.data.getData();
    
  }
}

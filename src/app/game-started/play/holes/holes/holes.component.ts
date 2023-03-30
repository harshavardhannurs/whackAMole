import { Component, OnInit } from '@angular/core';
import { DigsService } from 'src/app/services/digs.service';

@Component({
  selector: 'app-holes',
  templateUrl: './holes.component.html',
  styleUrls: ['./holes.component.css']
})
export class HolesComponent implements OnInit{
  randomDig:number;

  constructor(private digsService:DigsService){}

  ngOnInit(){
    this.digsService.randomDigSetEvent.subscribe(
      (data:boolean)=>{
        if(data === true){
          this.randomDig = this.digsService.getThatRandomDig()
        }
      }
    )
  }
}

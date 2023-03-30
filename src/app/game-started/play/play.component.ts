import { Component } from '@angular/core';
import { DigsService } from 'src/app/services/digs.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {

  constructor(private digsService:DigsService){}

  timerCount:number =0;
  randomDig:number;
  interval:any;
  isStopped:boolean

  ngOnInit(){
    this.digsService.stopMoleEvent.subscribe(
      (data:boolean)=>{
        this.isStopped = data
      }
    )
    this.interval = setInterval(
      ()=>{
        if(this.isStopped === true){
          return;
        }
        // this.randomDig = Math.floor(Math.random()*10+1)
        this.digsService.setRandomDig(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
      },(Math.floor(Math.random() * (0.8 - 1 + 1)) + 1) * 1000
    )
  }

}

// 
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigsService } from '../services/digs.service';

@Component({
  selector: 'app-game-started',
  templateUrl: './game-started.component.html',
  styleUrls: ['./game-started.component.css']
})
export class GameStartedComponent implements OnInit, OnDestroy{
  timerCount:number = 0;
  interval:any;
  randomSecond:number;
  points:number = 0;

  constructor(private router:Router, private digsService:DigsService){}

  ngOnInit(){
    
    this.interval = setInterval(
      ()=>{
        if(this.timerCount === 59){
          this.router.navigate(['/game-over'])
        }
        
        this.timerCount+=1;
      }, 1000
    )

    this.digsService.pointsIncrEvent.subscribe(
      (data:boolean)=>{
        if(this.points === 9){
          this.digsService.stopGeneratingMoles();
          setTimeout(
            ()=>{
              this.router.navigate(['/game-over'], {queryParams:{time:this.timerCount}})
            }, 1000
          )
          
        }
        if(data === true){
          this.points = this.digsService.getPoints();
        }
      }
    )

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

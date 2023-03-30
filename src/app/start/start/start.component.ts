import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit, OnDestroy{
  timerCount:number = 3;
  interval:any;

  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit(){
    this.interval = setInterval(
      ()=>{
        if(this.timerCount === 1){
          console.log('Triggered!');
          this.router.navigate(['/game-started', 'play'])
        }
        this.timerCount--;
      }, 1000
    )
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}

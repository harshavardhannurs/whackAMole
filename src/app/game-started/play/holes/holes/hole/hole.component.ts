import { Component, Input, OnInit } from '@angular/core';
import { DigsService } from '../../../../../services/digs.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.css']
})
export class HoleComponent implements OnInit{
  @Input() holeID:number;
  generatedDigNumber:number;
  displayedDigNumber:number;

  constructor(private digsService:DigsService){}

  ngOnInit(){
    this.digsService.randomDigSetEvent.subscribe(
      (data:boolean)=>{
        if(data === true){
          this.generatedDigNumber= this.digsService.getThatRandomDig()
        }
        if(this.generatedDigNumber === this.holeID){
          this.displayedDigNumber = this.generatedDigNumber
        }
        if(this.generatedDigNumber !== this.displayedDigNumber){
          this.displayedDigNumber = null
        }
      }
    )
    
  }

  handlePoints(){
    this.digsService.incrementPoints();
    console.log('Clicked!')
  }

}

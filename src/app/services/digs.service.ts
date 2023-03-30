import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class DigsService{

    randomDigSetEvent = new EventEmitter<boolean>();
    pointsIncrEvent = new EventEmitter<boolean>();
    stopMoleEvent = new EventEmitter<boolean>();
    randomDig:number
    points = 0;

    digs = [
        {id:1, name:'dig 1'},
        {id:2, name:'dig 2'},
        {id:3, name:'dig 3'},
        {id:4, name:'dig 4'},
        {id:5, name:'dig 5'},
        {id:6, name:'dig 6'},
        {id:7, name:'dig 7'},
        {id:8, name:'dig 8'},
        {id:9, name:'dig 9'},
    ]

    setRandomDig(digNo:number){
        this.randomDig = digNo;
        this.randomDigSetEvent.emit(true) //subscribe to this event
    }

    getThatRandomDig(){
        // console.log(this.randomDig)
        return this.randomDig;
    }

    incrementPoints(){
        this.points++;
        console.log('Service', this.points)
        this.pointsIncrEvent.emit(true)
    }

    getPoints(){
        return this.points
    }

    stopGeneratingMoles(){
        this.stopMoleEvent.emit(true);
    }

}
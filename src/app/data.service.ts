import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject(["Initial Goal", "Next life goal"]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goal:any){
      this.goals.next(goal);
  }
}

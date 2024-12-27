import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusPagService {

  private idSource = new BehaviorSubject<number>(1); 
  currentId$ = this.idSource.asObservable();

  changeView(id: number): void {
    this.idSource.next(id);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusPagService {

  private idSource = new BehaviorSubject<number>(0); // Початкове значення 0
  currentId$ = this.idSource.asObservable();

  changeView(id: number): void {
    this.idSource.next(id);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IReservationItem, ReservationState, ReservationAction, RESERVATION_LOCAL_STORAGE } from '../reservation.model';


@Injectable()
export class ReservationService {

  private _state = new BehaviorSubject<ReservationState>({
    action: ReservationAction.init,
    payload: this.getLocalStorage()
  });

  private set state(state: ReservationState) {
    this.saveLocalStorage(state.payload);
    this._state.next(state);
  }

  state$ = this._state.asObservable();

  add(item: IReservationItem) {
    if (this._state.value.payload.some(_item => this.getHash(_item) === this.getHash(item))) {
      return;
    }
    this.state = {
      action: ReservationAction.add,
      payload: [item, ...this._state.value.payload]
    };
  }

  remove(item: IReservationItem) {
    this.state = {
      action: ReservationAction.add,
      payload: this._state.value.payload.filter(_item => this.getHash(_item) === this.getHash(item))
    };
  }

  getHash(item: IReservationItem) {
    let d = item.date;
    return 'hash_' + d.day + d.hour + d.minute + d.month + d.year;
  }

  private saveLocalStorage(items: IReservationItem[]) {
    localStorage.setItem(RESERVATION_LOCAL_STORAGE, JSON.stringify(items));
  }

  private getLocalStorage() {
    let data = localStorage.getItem(RESERVATION_LOCAL_STORAGE);
    return data ? JSON.parse(data) : [];
  }
}

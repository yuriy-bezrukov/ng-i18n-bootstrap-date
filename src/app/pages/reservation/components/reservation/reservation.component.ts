import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbTimeStruct, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { IReservationItem, MINUTE_STEP, TIME_MIN, TIME_MAX } from '../../reservation.model';
import { ReservationService } from '../../service/reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit, OnDestroy {

  currentReservationItem: IReservationItem;
  date: NgbDateStruct = this.calendar.getToday();
  hourStep = Math.ceil(MINUTE_STEP / 60);
  minuteStep = MINUTE_STEP;
  private _oldTime: NgbTimeStruct = { hour: TIME_MIN, minute: 0, second: 0 };
  private allReservation: IReservationItem[] = [];
  private sub = new Subscription();
  time: NgbTimeStruct = { hour: TIME_MIN, minute: 0, second: 0 };

  constructor(private reservationService: ReservationService, private calendar: NgbCalendar) { }

  ngOnInit() {
    //  ---@TODO remove
    this.reservationService.add({ date: { day: 21, hour: 14, minute: 0, month: 2, year: 2020 }, isReservation: true, title: 'qweqwe 123' });
    // ----------------

    this.sub.add(this.reservationService.state$.subscribe(state => {
      this.allReservation = state.payload;
      this.setCurrentItem();
    }));
  }

  onChangeDate(date: NgbDateStruct) {
    this.setCurrentItem();
  }

  onChangeTime(time: NgbTimeStruct) {
    if (time.hour < TIME_MIN || time.hour > TIME_MAX) {
      setTimeout(() => {
        this.time = this._oldTime;
      });
      return;
    }
    this._oldTime = this.time;
    this.setCurrentItem();
  }

  private setCurrentItem() {
    let d = this.date;
    let t = this.time;
    if (!d || !t) {
      return;
    }
    this.currentReservationItem = this.allReservation.find(item => {
      let i = item.date;
      return i.year === d.year && i.month === d.month && i.day === d.day && i.hour === t.hour && i.minute === t.minute;
    });
  }

  reservation() {
    this.reservationService.add({
      date: {
        day: this.date.day,
        month: this.date.month,
        year: this.date.year,
        hour: this.time.hour,
        minute: this.time.minute
      },
      isReservation: true
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

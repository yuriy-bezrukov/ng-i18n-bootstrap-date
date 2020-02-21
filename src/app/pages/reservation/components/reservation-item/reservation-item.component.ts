import { Component, Input } from '@angular/core';
import { IReservationItem } from '../../reservation.model';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.scss']
})
export class ReservationItemComponent {

  @Input() item: IReservationItem;

}

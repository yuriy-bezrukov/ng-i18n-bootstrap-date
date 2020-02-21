import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NgbDatepickerModule, NgbDatepickerI18n, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { I18n, CustomDatepickerI18n } from 'src/app/shared/i18n/ngb-datepicker/ngb-datepicker';
import { NgbDateCustomParserFormatter } from 'src/app/shared/i18n/ngb-datepicker/ngb-date-parser-formatter';
import { ReservationItemComponent } from './components/reservation-item/reservation-item.component';
import { ReservationService } from './service/reservation.service';



@NgModule({
  declarations: [ReservationComponent, ReservationItemComponent],
  exports: [ReservationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
  ],
  providers: [
    ReservationService,
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }
  ],
})
export class ReservationModule { }

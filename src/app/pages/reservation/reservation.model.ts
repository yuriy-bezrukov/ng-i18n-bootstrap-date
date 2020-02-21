export interface IReservationItem {
    title?: string;
    description?: string;
    date: {
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number
    };
    isReservation: boolean;
}

export const RESERVATION_LOCAL_STORAGE = 'reservation-local-storage';

export enum ReservationAction {
  init,
  add,
  remove
}

export interface ReservationState {
  action: ReservationAction,
  payload: IReservationItem[]
} 

export const MINUTE_STEP = 120;
export const TIME_MIN = 10;
export const TIME_MAX = 20;
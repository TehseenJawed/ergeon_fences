import dayjs from 'dayjs';
import { STATE } from '../../typeCasting/typeCasting';
import {
  Calendar,
  CalendarFilter
} from '../../typeCasting/expectedModels/model';


export const Loading = (load: boolean) => {
  return {
    type: "Loading",
    load,
  };
};

export const SetCalendar = (load: Calendar) => {
  return {
    type: "SetCalendar",
    load,
  };
};

export const SetCalendarFilter = (load: CalendarFilter) => {
  return {
    type: "SetCalendarFilter",
    load,
  };
};

export const GetCalendar = () => {
  return async (dispatch: any, state: any) => {
    const { year, month, day } = state().CalendarStore.calendarFilter
    try {
      dispatch(Loading(true))
      const calendatData: any = dayjs(year + "-" + month + "-" + day)
      const lastData: any = dayjs(year + "-" + month + "-0" +String(Number(day)+7))
      const newObj: Calendar = {
        day: calendatData.$D,
        week: calendatData.$W,
        month: calendatData.$M,
        year: calendatData.$y,
        lastDate: lastData.$D < calendatData.$D ? lastData.$D : 'null',
        date: String(new Date(calendatData.$d).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
      }
      dispatch(SetCalendar(newObj))
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
};


export const UpdateCalendar = () => {
  return async (dispatch: any, state: any) => {
    try {
      const { year, month, day } = state().CalendarStore.calendarFilter
      dispatch(Loading(true));
      let checkDay = Number(day) + 7 < 9 ? '0' + String(Number(day) + 7) : String(Number(day) + 7)
      const checkIfNext: any = dayjs(year + "-" + month + "-" + day);
      const lastData: any = dayjs(year + "-" + month + "-" + checkDay);
      
      console.log(checkIfNext.$D < Number(day));
      if (checkIfNext.$D < Number(day)) {
        const newObj: CalendarFilter = {
          day: Number(checkIfNext.$D) < 9 ? '0' + String(checkIfNext.$D) : String(checkIfNext.$D),
          month: Number(checkIfNext.$M) < 9 ? '0' + String(checkIfNext.$M+1) :  String(checkIfNext.$M+1),
          year: Number(checkIfNext.$y) < 9 ? '0' + String(checkIfNext.$y) : String(checkIfNext.$y),
        }
        
        dispatch(SetCalendarFilter(newObj))
        const calendarObj: Calendar = {
          day: checkIfNext.$D,
          week: checkIfNext.$W,
          month: checkIfNext.$M,
          year: checkIfNext.$y,
          lastDate: 'null',
          date: String(new Date(checkIfNext.$d).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
        }
        dispatch(SetCalendar(calendarObj));
      } else {
        const calendarObj: Calendar = {
          day: checkIfNext.$D,
          week: checkIfNext.$W,
          month: checkIfNext.$M,
          year: checkIfNext.$y,
          lastDate: lastData.$D < checkIfNext.$D ? lastData.$D : 'null',
          date: String(new Date(checkIfNext.$d).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
        }
        dispatch(SetCalendar(calendarObj));
      }
      dispatch(Loading(false))
    }
    catch (err) {
      dispatch(Loading(false))
    }
  }
}



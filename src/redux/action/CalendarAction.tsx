import dayjs from 'dayjs';
import {STATE} from '../../typeCasting/typeCasting';
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
  return async (dispatch: any, state: any ) => {
    const {year, month, day} = state().CalendarStore.calendarFilter
    try {
      dispatch(Loading(true))
      
      const calendatData: any = dayjs(year+"-"+month+"-"+day)
      console.log(calendatData);
      const newObj: Calendar = {
        day: calendatData.$D,
        week: calendatData.$W,
        month: calendatData.$M,
        year: calendatData.$y,
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




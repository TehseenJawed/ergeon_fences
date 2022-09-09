import React, {useState, useEffect} from 'react';
import { HorizontalCalendar } from './InnerComponents';
import { CALENDAR, CALENDAR_FILTER } from '../../redux/reducer/CalendarStore';
import { GetCalendar, SetCalendarFilter, UpdateCalendar } from '../../redux/action/CalendarAction';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components'

const Calendar = () => {
  const dispatch = useDispatch<any>();
  const calendarFilter = useSelector(CALENDAR_FILTER)
  const calendar = useSelector(CALENDAR)
  const { pathname } = useLocation();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const goBack = () => {
    const newObj = {
      ...calendarFilter,
      day: '0'+String(Number(calendarFilter.day) - 1)
    }
    dispatch(SetCalendarFilter(newObj))
    dispatch(UpdateCalendar())
  }
  
  const goForward = () => {
    const newObj = {
      ...calendarFilter,
      day: Number(calendarFilter.day) < 9 ? '0' + String(Number(calendarFilter.day) + 1)  : String(Number(calendarFilter.day) + 1)
    }
    dispatch(SetCalendarFilter(newObj))
    dispatch(UpdateCalendar())
  }

  useEffect(() => {
    dispatch(GetCalendar())
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className='calendar-wrapper'>
      <span>
        {
          calendar?.date
        }
      </span>
      <div className='calendar-container'>
        <Button icon='back' pressed={goBack}/>
        <HorizontalCalendar />
        <Button icon='forward' pressed={goForward}/>
      </div>
    </div>
  )
}

export default Calendar;
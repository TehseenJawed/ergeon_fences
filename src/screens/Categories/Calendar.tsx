import React, {useState, useEffect} from 'react';
import { CategoryItem } from './InnerComponents';
import { GetCalendar } from '../../redux/action/CalendarAction';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Calendar = () => {
  const dispatch = useDispatch<any>();
  const { pathname } = useLocation();
  const [activeCategory, setActiveCategory] = useState<number>(0);
  console.log("CHAL 1");
  
  useEffect(() => {
    dispatch(GetCalendar())
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className='calendar-wrapper'>
      <CategoryItem />
    </div>
  )
}

export default Calendar;
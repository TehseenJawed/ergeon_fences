import { FiberPin } from '@mui/icons-material';
import React from 'react';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io';
import {useSelector} from 'react-redux';
import {CALENDAR_FILTER} from '../redux/reducer/CalendarStore';

interface Prop {
  icon: string,
  pressed: () => void
}

const Button = (props:Prop) => {
  const calendarFilter = useSelector(CALENDAR_FILTER)
  const { icon, pressed } = props
  
  return (
    <div onClick={pressed} className={`calendar-button ${Number(calendarFilter?.day) <= 1 && icon === 'back' ? "disableButton" : ""}`}>
      {
        icon === 'back' ? <IoMdArrowDropleft size={20}/> : <IoMdArrowDropright size={20}/>
      }
    </div>
  )
}

export default Button

import { FiberPin } from '@mui/icons-material';
import React from 'react';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io';

interface Prop {
  icon: string,
  pressed: () => void
}

const Button = (props:Prop) => {
    const { icon, pressed } = props
  return (
    <div onClick={pressed} className="calendar-button">
      {
        icon === 'back' ? <IoMdArrowDropleft size={20}/> : <IoMdArrowDropright size={20}/>
      }
    </div>
  )
}

export default Button

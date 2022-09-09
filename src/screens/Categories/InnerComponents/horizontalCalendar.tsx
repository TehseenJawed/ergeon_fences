import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CALENDAR_FILTER, CALENDAR } from '../../../redux/reducer/CalendarStore'

const CategoryItem = (props: any) => {
    const navigate = useNavigate();
    const filterOption = useSelector(CALENDAR_FILTER)
    const calenderData = useSelector(CALENDAR)
    const generateRepeat = 'S'.repeat(7).split('')

    return (
        <div className='calendar-horizontal'>
           {
            generateRepeat.map((v,i) => (
                <div key={i} style={{ width: i == 0 ? 45 : 50 + i * 2 , height: i == 0 ? 45 : 50 + i*2 }}>
                    {
                        Number(calenderData.lastDate) < 7 - i || calenderData.lastDate == 'null' ? calenderData.day + i : ""
                    }
                </div>
            ))
           }
        </div>
    )
}

export default CategoryItem;
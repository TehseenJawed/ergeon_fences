import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CALENDAR_FILTER, CALENDAR } from '../../../redux/reducer/CalendarStore'

const CategoryItem = (props: any) => {
    const navigate = useNavigate();
    const filterOption = useSelector(CALENDAR_FILTER)
    const calenderData = useSelector(CALENDAR)
    const generateRepeat = 'S'.repeat(7).split('')
    console.log(" ==============>> ",calenderData);
    

    return (
        <div className='calendar-horizontal'>
           {
            generateRepeat.map((v,i) => (
                <div>
                    {calenderData.day + i}
                </div>
            ))
           }
        </div>
    )
}

export default CategoryItem;
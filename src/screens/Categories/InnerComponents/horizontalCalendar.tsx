import { useSelector } from 'react-redux';
import { CALENDAR } from '../../../redux/reducer/CalendarStore'

const CategoryItem = (props: any) => {
    const calenderData = useSelector(CALENDAR)
    const generateRepeat = 'S'.repeat(7).split('')

    const getLeftValue = (index: number) => {
        if (index == 6) {
            return calenderData.lastDate;
        } else if (index == 5) {
            return Number(calenderData.lastDate) - 1;
        } else if (index == 4) {
            return Number(calenderData.lastDate) - 2;
        } else if (index == 3) {
            return Number(calenderData.lastDate) - 3;
        } else if (index == 2) {
            return Number(calenderData.lastDate) - 4;
        } else if (index == 1) {
            return Number(calenderData.lastDate) - 5;
        }
    }
    return (
        <div className='calendar-horizontal'>
           {
            generateRepeat.map((v,i) => (
                <div key={i} >
                    {
                        Number(calenderData.lastDate) < 7 - i || calenderData.lastDate == 'null' ? calenderData.day + i : getLeftValue(i)
                    }
                </div>
            ))
           }
        </div>
    )
}

export default CategoryItem;
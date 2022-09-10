import { STATE } from '../../typeCasting/typeCasting'

const initialState = {
    baseUrl: "",
    loading: false,
    calendar: [],
    calendarFilter: {
        year:'2020',
        month:'01',
        day:'01'
    },
    currentSnake: {
        vertical:'top', 
        horizontal:'center', 
        open: false
    },
}


// API Selector
export const BASE_URL = (state: STATE) => state.CalendarStore.baseUrl
export const LOADING = (state: STATE) => state.CalendarStore.loading
export const CURRENTSNAKE = (state: STATE) => state.CalendarStore.currentSnake
export const CALENDAR = (state: STATE) => state.CalendarStore.calendar
export const CALENDAR_FILTER = (state: STATE) => state.CalendarStore.calendarFilter

export default function AuthReducer(state = initialState, action: any) {
    switch (action.type) {
        case "Loading":
            return {
                ...state,
                loading:action.load
            }
        case "SetCalendar":
            return {
                ...state,
                calendar:action.load
            }
        case "SetCalendarFilter":
            return {
                ...state,
                calendarFilter:action.load
            }
    }


    return state;
}
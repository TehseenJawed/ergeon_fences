import {
    CurrentSnake,
    Calendar,
    CalendarFilter
} from './expectedModels/model'

export interface STATE {
    CalendarStore: {
        baseUrl: string,
        loading: boolean,
        currentSnake: CurrentSnake,
        calendar: Calendar,
        calendarFilter: CalendarFilter,
    }
}

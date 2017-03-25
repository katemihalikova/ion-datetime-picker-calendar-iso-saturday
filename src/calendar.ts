import {Calendar} from "ion-datetime-picker";
import ISOMondayCalendar from "ion-datetime-picker-calendar-iso-monday/src/calendar";

export default class ISOSaturdayCalendar extends ISOMondayCalendar implements Calendar {
  public weekDays = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

  protected getFirstWeekDayOfMonth(year: number, month: number): number {
    return (super.getFirstWeekDayOfMonth(year, month) + 2) % 7 || 7;
  }
}

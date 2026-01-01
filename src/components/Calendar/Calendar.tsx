import React from "react";
import { parseDate } from "../../helper/dateParser";
import { weekDays } from "../../constants/general";
import "./Calendar.scss";

interface CalendarProps {
    date: string;
}

export const Calendar: React.FC<CalendarProps> = ({ date }) => {

    //change the given date into a Date object
    const convertedDate = parseDate(date);

    //fetch month, year and day from the given date
    const month = convertedDate.toLocaleString("default", { month: "long" });
    const year = convertedDate.getFullYear();
    const day = convertedDate.getDate();

    // Get the first day of the month
    const firstDay = new Date(year, convertedDate.getMonth(), 1);

    // Get the last day of the month
    const totalDays = new Date(year, convertedDate.getMonth() + 1, 0).getDate();

    // Get the weekday of the first day
    const weekdayOfFirst = firstDay.getDay();

    // Create an array with all days in the month
    const daysInMonth: number[] = [];
    for (let i = 1; i <= totalDays; i++) {
        daysInMonth.push(i);
    }

    // Create empty leading slots to align the first day (reusable variable)
    const leadingEmptySlots = Array.from({ length: weekdayOfFirst }, (_, i) => (
        <div key={`empty-${i}`} />
    ));

    // Build weekday labels using a for-loop (reusable variable)
    const weekdayLabels: React.ReactNode[] = [];
    for (let i = 0; i < weekDays.length; i++) {
        const label = weekDays[i];
        weekdayLabels.push(
            <p key={label} className="calendar-weekday">
                {label}
            </p>
        );
    }


    return (
        <div className="calendar-container">
            <h3 className="calendar-header">
                {month} {year}
            </h3>
            <div className="calendar-weekdays">
                {weekdayLabels}
            </div>
            <div className="calendar-days">
                {leadingEmptySlots}

                {daysInMonth.map((dayNumber) => {
                    const isHighlighted = dayNumber === day;
                    return (
                        <div
                            className={`calendar-day ${isHighlighted ? "highlighted" : ""}`}
                            key={dayNumber}
                        >
                            {dayNumber}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

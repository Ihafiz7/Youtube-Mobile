import React from 'react'

const Calculate = ({ publishedAt }) => {
    function calculateTime(date){
        const targetDate = new Date(date);
        const currentDate = new Date();

        const timeDiffInMs = currentDate - targetDate;


        //consts for convertions
        const msInSeconds = 1000;
        const secondsInMinute = 60;
        const minutesInHour = 60;
        const hoursInDay = 24;
        const daysInMonth = 30.44; //avg

        // Calculate diff in time 
        const secondsDiff = Math.floor(timeDiffInMs /msInSeconds);
        const minutesDiff = Math.floor(secondsDiff / secondsInMinute);
        const hoursDiff = Math.floor(minutesDiff / minutesInHour);
        const daysDiff = Math.floor(hoursDiff / hoursInDay);
        const monthsDiff = Math.floor( daysDiff / daysInMonth);

        // return a object with all possiabl results 
        if(monthsDiff >= 12) {
            const yearsDiff = Math.floor( monthsDiff / 12 );
            return {
                years: yearsDiff,
            };
        } else if ( monthsDiff > 0){
            return {
                months: monthsDiff
            };
        } else {
            return {
                days: daysDiff,
            }
        }

    };

    const timeDifference = calculateTime(publishedAt);

    return(
        <p>
            {timeDifference.years && <span>{timeDifference.years} years ago</span>}
            {timeDifference.months && <span>{timeDifference.months} months ago</span>}
            {timeDifference.days && <span>{timeDifference.days} days ago</span>}
        </p>
    );

}

export default Calculate
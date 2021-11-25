import React, { useState } from 'react';
import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'

const getCalenderArray = date => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
  })
  return sundays.map(sunday => 
    eachDayOfInterval({start: sunday, end: endOfWeek(sunday)})
  )
}

export default function Calender() {
  const [targetDate, setTargetDate] = useState(new Date())
  const calender = getCalenderArray(targetDate);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th id="prev" onClick={() => setTargetDate(current => subMonths(current, 1))}>&laquo;</th>
            <th id="title" colSpan="3">{format(targetDate, 'y年M月')}</th>
            <th id="next" onClick={() => setTargetDate(current => addMonths(current, 1))}>&raquo;</th>
            <th></th>
          </tr>
          <tr>
            <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
          </tr>
        </thead>
        <tbody>
          {calender.map((weekRow, rowNum) => (
            <tr key={rowNum}>
              {weekRow.map(date => (
                date.getMonth() === targetDate.getMonth()
                ? <td key={getDay(date)}>{getDate(date)}</td>
                : <td key={getDay(date)}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}


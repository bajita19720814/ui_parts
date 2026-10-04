'use strict';

{
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    function getCalendarBody() {
        const dates = [];
        const lastDate = new Date(year, month + 1, 0).getDate();
        for (let i = 0; i < lastDate; i++) {
            dates.push({
                date: i + 1,
                isToday: false,
                isDisabled: false,
            });
        }
        if (year === today.getFullYear() && month === today.getMonth())  {
            dates[today.getDate() - 1].isToday = true;
        }  
        return dates;
    }
    function getCalendarHead() {
        const dates = [];
        const lastDate = new Date(year, month, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        for (let i = 0; i < firstDay; i++) {
            dates.unshift({
                date: lastDate - i,
                isToday: false,
                isDisabled: true,
            });
        }
        return dates;
    }
    function getCalendarTail() {
        const dates = [];
        const firstDay = new Date(year, month + 1, 1).getDay();
        for (let i = 0; i < 7 - firstDay; i++) {
            dates.push({
                date: i + 1,
                isToday: false,
                isDisabled: true,
            });
        }
        return dates;
    }
    function getWeeks() {
        const dates = [
            ...getCalendarHead(),
            ...getCalendarBody(),
            ...getCalendarTail(),
        ];
        
        const weeks = [];
        const weeksCount = dates.length / 7;
        for (let i = 0; i < weeksCount; i++) {
            weeks.push(dates.splice(0, 7));
        }
        return weeks;
    }
    function createCalendar() {
        const tbody = document.querySelector('tbody');
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        
        getWeeks().forEach(week => {
            const tr = document.createElement('tr');
            week.forEach(date => {
                const td = document.createElement('td');
                td.textContent = date.date;
                if (date.isToday) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disabled');
                }
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
            document.getElementById('title').textContent = `${year}/${String(month + 1).padStart(2, '0')}`;
        });
       
    }
    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        createCalendar();
    });
    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        createCalendar();
    });
    document.getElementById('today').addEventListener('click', () => {
        year = today.getFullYear();
        month = today.getMonth();
        createCalendar();
    });
    createCalendar();

}
document.addEventListener('DOMContentLoaded', function () {
    createCalendar(11, 2024); // Crear calendario para noviembre de 2024
});

function createCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        if (day === 17) {
            dayElement.classList.add('special-day');
        }

        calendar.appendChild(dayElement);
    }
}

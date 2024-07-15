document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.querySelector('.calendar');
    const monthYearElement = document.querySelector('.month-year');
    const daysElement = document.querySelector('.days');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const today = new Date();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const daysInMonth = lastDayOfMonth.getDate();
        const startDay = firstDayOfMonth.getDay();

        monthYearElement.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        daysElement.innerHTML = '';

        for (let i = 0; i < startDay; i++) {
            daysElement.innerHTML += '<div class="other-month"></div>';
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.textContent = i;

            if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === i) {
                day.classList.add('today');
            }

            daysElement.appendChild(day);
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});


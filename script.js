function convertTime() {
    const time = document.getElementById("time").value.trim();
    let result = '';

    const timeParts = time.split(' ');
    
    if (timeParts.length === 2) {
        const [hoursMinutes, period] = timeParts;
        let [hours, minutes] = hoursMinutes.split(':');
        hours = parseInt(hours);
                if (hours < 1 || hours > 12) {
            result = 'Invalid input. Please use hh:mm AM/PM or hh:mm format.';
        } else {
            if (period.toUpperCase() === 'PM' && hours !== 12) {
                hours += 12;
            } else if (period.toUpperCase() === 'AM' && hours === 12) {
                hours = 0;
            }

            result = `${hours < 10 ? '0' + hours : hours}:${minutes} (24-hour format)`;
        }
    } else if (timeParts.length === 1) {
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        const period = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        result = `${hours}:${minutes} ${period} (12-hour format)`;
    } else {
        result = 'Invalid input. Please use hh:mm AM/PM or hh:mm format.';
    }

    document.getElementById("result").innerText = result;
}

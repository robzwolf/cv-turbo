import './Dates.scss';
import dayjs from "dayjs";

export default function Dates(props) {
    function formatDateAsMonth(dateString) {
        const dateFormat = "MMM YYYY";

        let month = dayjs(dateString).format(dateFormat);
        month = (month === "Invalid Date") ? "" : month;

        return month;
    }


    const startMonth = formatDateAsMonth(props.startTime);
    const endMonth = formatDateAsMonth(props.endTime);

    let formattedWhen;
    if (startMonth && endMonth) {
        formattedWhen = `${startMonth} – ${endMonth}`
    } else if (startMonth && !endMonth) {
        // If there is no provided end month but there is a start month then it is "to present"
        formattedWhen = `${startMonth} – Present`;
    } else if (!startMonth && endMonth) {
        // If there is no start month but there is an end month then assume the event only belongs in that month
        formattedWhen = endMonth;
    }

    return (
        <span className="Dates">
            {formattedWhen}
        </span>
    )
}

import './Dates.scss';
import dayjs from "dayjs";

export default function Dates(props) {
    function formatDateAsMonth(year, month) {
        const dateFormat = "MMM YYYY";

        let formattedMonthYear = dayjs(year, month).format(dateFormat);
        formattedMonthYear = (formattedMonthYear === "Invalid Date") ? "" : formattedMonthYear;

        return formattedMonthYear;
    }

    const {start,end} = props;
    const startMonth = formatDateAsMonth(start.year, start.month);
    const endMonth = formatDateAsMonth(end.year, end.month);

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

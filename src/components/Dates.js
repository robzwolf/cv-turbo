import './Dates.scss';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const djs = dayjs.utc;

export default function Dates(props) {
    function _dateComponentIsValid(component) {
        if (typeof component !== "number") {
            return false;
        }

        if (component > 11 && component < 1900) {
            return false;
        }

        return true;
    }

    function formatDateAsMonth(year, month) {
        const monthDateFormat = "MMM";
        const yearDateFormat = "YYYY";
        const fullDateFormat = `${monthDateFormat} ${yearDateFormat}`;

        const _ok = _dateComponentIsValid;

        let formattedDate = "";
        if (_ok(year) && _ok(month)) {
            const dateObj = djs().year(year).month(month);
            try {formattedDate = dateObj.format(fullDateFormat); } catch {}
        } else if (_ok(year) && !_ok(month)) {
            const dateObj = djs().year(year);
            try {formattedDate = dateObj.format(yearDateFormat); } catch {}
        } else if (!_ok(year) && _ok(month)) {
            const dateObj = djs().month(month);
            try {formattedDate = dateObj.format(monthDateFormat); } catch {}
        }
        formattedDate = (formattedDate === "Invalid Date" || !formattedDate) ? "" : formattedDate;

        return formattedDate;
    }

    const {start,end} = props;
    const startMonth = formatDateAsMonth(start.year, start.month);
    const endMonth = formatDateAsMonth(end.year, end.month);

    let formattedWhen;
    if (startMonth === endMonth) {
        // If they're the same, just show the date once
        formattedWhen = startMonth;
    } else if (startMonth && endMonth) {
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

import dateStyles from "../../styles/Dates.module.scss";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(utc);
const djs = dayjs.utc;

export default function Dates(props) {
    const monthDateFormat = "MMM";
    const yearDateFormat = "YYYY";
    const fullDateFormat = `${monthDateFormat} ${yearDateFormat}`;

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

    const {start,end,cn} = props;
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
        // ...if the start month is not in the future
        // else if the start month is in the future then it's "expected"

        if (djs(startMonth, [fullDateFormat, yearDateFormat, monthDateFormat]).isAfter(djs(), "month")) {
            formattedWhen = `${startMonth} (Expected)`
        } else {
            formattedWhen = `${startMonth} – Present`;
        }
    } else if (!startMonth && endMonth) {
        // If there is no start month but there is an end month then assume the event only belongs in that month
        formattedWhen = endMonth;
    }

    return (
        <span className={`${dateStyles.Dates} ${cn}`}>
            {formattedWhen}
        </span>
    )
}

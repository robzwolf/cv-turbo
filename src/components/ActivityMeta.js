import dayjs from "dayjs";

import './ActivityMeta.scss';
import Dates from "./Dates";

export default function ActivityMeta(props) {
    const {data} = props;

    let title;
    let subtitle;

    if (data.activityTitle) {
        title = data.activityTitle;
    } else if (data.activityLocation) {
        title = data.activityLocation;
    } else {
        title = "";
    }

    const dateFormat = "MMM YYYY";
    let startMonth;
    try {
        startMonth = dayjs(data.activityStartTime).format(dateFormat);
    } catch {}

    let endMonth;
    try {
        endMonth = dayjs(data.activityEndTime).format(dateFormat);
    } catch {}

    let activityDates;
    if (startMonth && endMonth) {
        activityDates = `${startMonth} – ${endMonth}`
    }

    if (data.activityTitle) {
        subtitle = (
            <>
                <span>
                    {data.activityLocation}
                </span>
                <span>
                    {` | `}
                </span>
                <Dates>
                    {activityDates}
                </Dates>
            </>
        )
    } else {
        subtitle = (
            <>
                <Dates>
                    {activityDates}
                </Dates>
            </>
        )
    }

    return (
        <>
            <h3 className="ActivityTitle">{title}</h3>
            <h4 className="ActivitySubtitle">{subtitle}</h4>
        </>
    )
}

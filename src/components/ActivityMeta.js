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

    if (data.activityTitle) {
        subtitle = (
            <>
                <span>
                    {data.activityLocation}
                </span>
                <span>
                    {` | `}
                </span>
                <Dates startTime={data.activityStartTime} endTime={data.activityEndTime} />
            </>
        )
    } else {
        subtitle = (
            <>
                <Dates startTime={data.activityStartTime} endTime={data.activityEndTime} />
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

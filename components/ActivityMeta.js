import activityMetaStyles from '../styles/ActivityMeta.module.scss';
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
                <Dates start={data.activityStart} end={data.activityEnd} cn={activityMetaStyles.Dates} />
            </>
        )
    } else {
        subtitle = (
            <>
                <Dates start={data.activityStart} end={data.activityEnd} cn={activityMetaStyles.Dates} />
            </>
        )
    }

    return (
        <>
            <h3 className={activityMetaStyles.ActivityTitle}>{title}</h3>
            <h4 className={activityMetaStyles.ActivitySubtitle}>{subtitle}</h4>
        </>
    )
}

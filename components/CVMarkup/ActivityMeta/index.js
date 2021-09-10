import Dates from "../Dates";

export default function ActivityMeta({data}) {
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
                {" | "}
                <Dates start={data.activityStart} end={data.activityEnd} />
            </>
        )
    } else {
        subtitle = (
            <>
                <Dates start={data.activityStart} end={data.activityEnd} />
            </>
        )
    }

    return (
        <>
            <h3 className="ActivityTitle">{title}</h3>
            <h4 className="ActivitySubtitle">{subtitle}</h4>
            <style jsx>{`
                .ActivityTitle {
                    font-size: 11pt;
                    margin: 8pt 0 4pt 0;
                }
                
                .ActivitySubtitle {
                    margin: 4pt 0;
                    color: #434343;
                    font-size: 10pt;
                }
            `}</style>
        </>
    )
}

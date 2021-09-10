import SectionTitle from "../SectionTitle";
import Activity from "../Activity";

export default function Section({data}){
    return (
        <>
            <SectionTitle>
                {data.sectionTitle}
            </SectionTitle>
            {data.activities && data.activities.map((activity) => <Activity data={activity} key={activity.activityTitle} />)}
        </>
    )
}

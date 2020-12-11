import React from "react";
import SectionTitle from "./SectionTitle";
import Activity from "./Activity";

export default class Section extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <>
                <SectionTitle>
                    {data.sectionTitle}
                </SectionTitle>
                {data.activities && data.activities.map((activity) => <Activity data={activity} key={activity.activityTitle} />)}
            </>
        )
    }
}

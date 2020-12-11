import React from "react";
import ActivityMeta from "./ActivityMeta";

export default class Activity extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <>
                <ActivityMeta data={data} />
                <p>{data.description}</p>
            </>
        )
    }
}

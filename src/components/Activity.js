import React from "react";
import ActivityMeta from "./ActivityMeta";
import MarkdownText from "./MarkdownText";

export default class Activity extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <>
                <ActivityMeta data={data} />
                <MarkdownText>{data.description}</MarkdownText>
            </>
        )
    }
}

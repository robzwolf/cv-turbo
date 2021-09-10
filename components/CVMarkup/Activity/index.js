import ActivityMeta from "../ActivityMeta";
import MarkdownText from "../MarkdownText";

export default function Activity({data}) {
    return (
        <>
            <ActivityMeta data={data} />
            <MarkdownText>{data.description}</MarkdownText>
        </>
    )
}

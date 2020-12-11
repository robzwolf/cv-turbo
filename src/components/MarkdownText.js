import ReactMarkdown from "react-markdown";
import "./MarkdownText.scss";

export default function MarkdownText(props) {
    return (
        <div className="MarkdownText">
            <ReactMarkdown>{props.children}</ReactMarkdown>
        </div>
    )
}

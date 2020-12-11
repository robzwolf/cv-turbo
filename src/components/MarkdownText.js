import ReactMarkdown from "react-markdown";
import "./MarkdownText.scss";

export default function MarkdownText(props) {
    return (
        <div className="markdown-formatted-text">
            <ReactMarkdown>{props.children}</ReactMarkdown>
        </div>
    )
}

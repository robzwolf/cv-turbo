import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import "./MarkdownText.scss";

export default function MarkdownText(props) {
    return (
        <div className="MarkdownText">
            <ReactMarkdown
                plugins={[gfm]}
                linkTarget="_blank"
            >
                {props.children}
            </ReactMarkdown>
        </div>
    )
}

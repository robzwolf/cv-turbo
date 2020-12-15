import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import styles from "../styles/MarkdownText.module.scss";

export default function MarkdownText(props) {
    return (
        <div className={styles.MarkdownText}>
            <ReactMarkdown
                plugins={[gfm]}
                linkTarget="_blank"
            >
                {props.children}
            </ReactMarkdown>
        </div>
    )
}

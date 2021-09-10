import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"

export default function MarkdownText(props) {
    return (
        <>
            <div className="MarkdownText">
                <ReactMarkdown
                    plugins={[gfm]}
                    linkTarget="_blank"
                >
                    {props.children}
                </ReactMarkdown>
            </div>
            <style jsx>{`
                .MarkdownText {
                    white-space: pre-line;
                    margin-bottom: 18pt;
                }
                
                .MarkdownText > :first-child {
                    margin-top: 0;
                }
            
                .MarkdownText code {
                    font-family: 'Roboto Mono', monospace;
                }
            `}</style>
        </>
    )
}

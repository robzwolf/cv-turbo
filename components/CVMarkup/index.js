import Title from "./Title";
import ProfileStatement from "./ProfileStatement";
import Section from "./Section";
import MarkdownText from "./MarkdownText";

export default function CVMarkup({ data }) {
    return (
        <>
            <div className="CV">
                <main className="a4">
                    <Title>
                        {data.title}
                    </Title>
                    <ProfileStatement>
                        <MarkdownText>
                            {data.profileStatement}
                        </MarkdownText>
                    </ProfileStatement>
                    {data.sections && data.sections.map((section) => <Section data={section} key={section.sectionTitle} />)}
                </main>
            </div>
            <style jsx>{`
                .CV {
                    padding: 50px;
                    overflow-y: scroll;
                    height: 100vh;
                }
                
                main {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 10pt;
                    padding: 20mm 25.4mm;
                
                    // Width and height in millimetres
                    // (default)
                    --page-width: 100;
                    --page-height: 100;
                
                    // Ratio of millimetres to pixels, e.g. 0.5 means 210mm translates to 105px
                    --base-scale: 1mm;
                
                    margin: auto;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    width: calc(var(--page-width) * var(--base-scale));
                    height: calc(var(--page-height) * var(--base-scale));
                    box-sizing: border-box;
                }
                
                main.a4 {
                    --page-width: 210;
                    --page-height: 297;
                }
            `}</style>
        </>
    )
}

import Title from "./Title";
import ProfileStatement from "./ProfileStatement";
import Section from "./Section";
import MarkdownText from "./MarkdownText";

export default function CVMarkup({ data }) {
    return (
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
    )
}

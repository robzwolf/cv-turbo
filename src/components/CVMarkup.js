import Title from "./Title";
import ProfileStatement from "./ProfileStatement";
import Section from "./Section";
import React from "react";
import MarkdownText from "./MarkdownText";

export default function CVMarkup(props) {
    const {data} = props;
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

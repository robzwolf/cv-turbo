import Title from "./Title";
import ProfileStatement from "./ProfileStatement";
import Section from "./Section";
import React from "react";

export default function CVWeb(props) {
    const {data} = props;
    return (
        <div className="CV">
            <main className="a4">
                <Title>
                    {data.title}
                </Title>
                <ProfileStatement>
                    {data.profileStatement}
                </ProfileStatement>
                {data.sections && data.sections.map((section) => <Section data={section} key={section.sectionTitle} />)}
            </main>
        </div>
    )
}

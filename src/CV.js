import './CV.scss';

import Title from "./components/Title";
import ProfileStatement from "./components/ProfileStatement";
import React from "react";
import exampleCV from './data/exampleCV.json';
import Section from "./components/Section";

class CV extends React.Component {
    constructor(props) {
        super(props);

        this.cvData = exampleCV.cv;
    }

    render() {
        const data = this.cvData;
        return (
            <div className="CV">
                <main className="a4">
                    <Title>
                        {data.title}
                    </Title>
                    <ProfileStatement>
                        {data.profileStatement}
                    </ProfileStatement>
                    {data.sections && data.sections.map((section) => <Section data={section} />)}
                </main>
            </div>
        );
    }
}

export default CV;

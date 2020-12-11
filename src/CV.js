import './CV.scss';

import Title from "./components/Title";
import ProfileStatement from "./components/ProfileStatement";
import React from "react";
import exampleCV from './data/exampleCV.json';
import cvSchema from './data/cvSchema.json';
import Section from "./components/Section";
import Form from "@rjsf/material-ui";

class CV extends React.Component {
    constructor(props) {
        super(props);

        this.cvData = exampleCV.cv;
    }

    render() {
        const data = this.cvData;
        return (
            <>
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
                <Form schema={cvSchema.jsonSchema} uiSchema={cvSchema.uiSchema} />
            </>
        );
    }
}

export default CV;

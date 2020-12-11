import './CV.scss';

import Title from "./components/Title";
import ProfileStatement from "./components/ProfileStatement";
import React from "react";
import exampleCV from './data/exampleCV.json';
import formSchema from './data/formSchema.json';
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
                <Form schema={formSchema.jsonSchema} uiSchema={formSchema.uiSchema} />
            </>
        );
    }
}

export default CV;

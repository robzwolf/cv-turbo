import './CV.scss';

import Title from "./components/Title";
import ProfileStatement from "./components/ProfileStatement";
import React from "react";
import Section from "./components/Section";
import Form from "@rjsf/material-ui";
import CVSchemaBuilder from "./components/CVSchemaBuilder";
import exampleFormData from "./data/exampleCV.json";

class CV extends React.Component {
    constructor(props) {
        super(props);

        let preloadedFormData;

        // Uncomment this line to use example form data
        // preloadedFormData = exampleFormData;

        const builder = new CVSchemaBuilder(preloadedFormData);
        builder.buildSchema();

        this.cvSchema = builder.getSchema();
        console.log(this.cvSchema);
    }

    render() {
        const {cvSchema} = this;
        const {formData: data} = cvSchema;
        return (
            <>
                {data && <div className="CV">
                    <main className="a4">
                        <Title>
                            {data.title}
                        </Title>
                        <ProfileStatement>
                            {data.profileStatement}
                        </ProfileStatement>
                        {data.sections && data.sections.map((section) => <Section data={section} key={section.sectionTitle} />)}
                    </main>
                </div>}
                <Form schema={cvSchema.jsonSchema} uiSchema={cvSchema.uiSchema} formData={data} />
            </>
        );
    }
}

export default CV;

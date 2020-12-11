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

        const formSchema = builder.getSchema();
        this.formSchema = {
            "jsonSchema": formSchema.jsonSchema,
            "uiSchema": formSchema.uiSchema
        }

        this.state = {
            formData: formSchema.formData
        }
    }

    updateFormData(e) {
        this.setState({formData: e.formData});
    }


    render() {
        const {formSchema} = this;
        const {formData: data} = this.state;
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
                <Form
                    onChange={e => {this.updateFormData(e)}}
                    className="CVBuilderForm"
                    schema={formSchema.jsonSchema}
                    uiSchema={formSchema.uiSchema}
                    formData={data}
                />
            </>
        );
    }
}

export default CV;

import './CV.scss';

import React from "react";
import Form from "@rjsf/material-ui";
import CVSchemaBuilder from "./components/CVSchemaBuilder";
import exampleFormData from "./data/exampleCV.json";
import CVMarkup from "./components/CVMarkup";
import CVPDFButton from "./components/CVPDFButton";

class CV extends React.Component {
    constructor(props) {
        super(props);

        let preloadedFormData;

        // Uncomment this line to use example form data
        preloadedFormData = exampleFormData;

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
                {data && <CVPDFButton data={data} />}
                {data && <CVMarkup data={data} />}
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

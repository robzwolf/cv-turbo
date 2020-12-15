import styles from '../styles/CV.module.scss';

import React from "react";
import Form from "@rjsf/material-ui";
import CVSchemaBuilder from "./CVSchemaBuilder";
import exampleFormData from "../data/exampleCV.json";
import CVMarkup from "./CVMarkup";
import CVPDFButton from "./CVPDFButton";
import Layout from "./Layout";

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
            <Layout>
                {data && <CVPDFButton data={data} />}
                {data && <CVMarkup data={data} className={`${styles.main} ${styles.a4}`} />}
                <Form
                    onChange={e => {this.updateFormData(e)}}
                    className={styles.CVBuilderForm}
                    schema={formSchema.jsonSchema}
                    uiSchema={formSchema.uiSchema}
                    formData={data}
                />
            </Layout>
        );
    }
}

export default CV;

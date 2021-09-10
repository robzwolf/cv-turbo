import exampleFormData from "../data/exampleCV.json";
import CVSchemaBuilder from "../components/CVSchemaBuilder";
import {useState} from "react";
import Form from "@rjsf/material-ui";
import CVMarkup from "../components/CVMarkup";

export default function Home() {
    let preloadedFormData;

    // Uncomment this line to use example form data
    preloadedFormData = exampleFormData;

    // Set up the schema for the form
    const builder = new CVSchemaBuilder(preloadedFormData);
    builder.buildSchema();

    // Get the schema and the data
    const formSchema = builder.getSchema();

    // Put the data in the state
    const [formData, setFormData] = useState(formSchema.formData);

    // Function to update form data in state
    const updateFormData = (e) => {
        setFormData(e.formData);
    }

    return (
        <>
            {formData && <CVMarkup data={formData} />}
            <Form
                onChange={e => {updateFormData(e)}}
                className="CVBuilderForm"
                schema={formSchema.jsonSchema}
                uiSchema={formSchema.uiSchema}
                formData={formData}
            />
        </>
    )
}

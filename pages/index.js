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
            <div className="app">
                {formData && <CVMarkup data={formData} />}
                <Form
                    onChange={e => {updateFormData(e)}}
                    className="CVBuilderForm"
                    schema={formSchema.jsonSchema}
                    uiSchema={formSchema.uiSchema}
                    formData={formData}
                />
            </div>
            <style jsx>{`
                .app {
                    display: grid;
                    grid-template-columns: auto auto 1fr 20px;
                }
                
                .CV {
                    padding: 50px;
                }
                
                main {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 10pt;
                    padding: 20mm 25.4mm;
                
                    // Width and height in millimetres
                    // (default)
                    --page-width: 100;
                    --page-height: 100;
                
                    // Ratio of millimetres to pixels, e.g. 0.5 means 210mm translates to 105px
                    --base-scale: 1mm;
                
                    margin: auto;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    width: calc(var(--page-width) * var(--base-scale));
                    height: calc(var(--page-height) * var(--base-scale));
                    box-sizing: border-box;
                }
                
                main.a4 {
                    --page-width: 210;
                    --page-height: 297;
                }
                
                .CVBuilderForm textarea {
                        font-family: 'Roboto Mono', monospace;
                        font-size: 80%;
                }
            `}</style>
            <style jsx global>{`
                body {
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                * {
                   box-sizing: border-box;
                }
            `}</style>
        </>
    )
}

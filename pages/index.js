import exampleFormData from "../data/exampleCV.json";
import CVSchemaBuilder from "../components/CVSchemaBuilder";
import {useState} from "react";
import Form from "@rjsf/material-ui";
import CVMarkup from "../components/CVMarkup";
import Head from "next/head";

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
            <Head>
                <title>CV Turbo</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            </Head>
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
            <style jsx global>{`
                body {
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                * {
                   box-sizing: border-box;
                }
                
                .app {
                    display: grid;
                    grid-template-columns: auto auto 1fr 20px;
                }
                
                .CVBuilderForm textarea {
                        font-family: 'Roboto Mono', monospace;
                        font-size: 80%;
                }
            `}</style>
        </>
    )
}

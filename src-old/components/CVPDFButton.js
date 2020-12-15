import React from 'react';
import { pdf, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';
import sanitize from "sanitize-filename";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create document component
const CVPDFDocument = (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

const generateFileName = (data) => `${sanitize(data.title)} - CV.pdf`;

// Source: https://blog.jayway.com/2017/07/13/open-pdf-downloaded-api-javascript/
const showFile = (formData) => {
    pdf(CVPDFDocument).toBlob().then((blob) => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        const pdfBlog = new Blob([blob], {type: "application/pdf"});

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(pdfBlog);
            return;
        }

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const linkHref = window.URL.createObjectURL(pdfBlog);
        const link = document.createElement('a');
        link.href = linkHref;
        link.download = generateFileName(formData)
        link.click();
        setTimeout(function(){
            // For Firefox it is necessary to delay revoking the ObjectURL
            window.URL.revokeObjectURL(linkHref);
        }, 100);
    });
}


export default function CVPDFButton(props) {
    const {data} = props;

    return (
        <div className="CVPDFButton">
            <Button
                variant="contained"
                color="primary"
                onClick={() => {showFile(data)}}
            >
                Download as PDF
            </Button>
        </div>
    )
};

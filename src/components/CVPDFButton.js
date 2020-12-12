import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
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
const CVPDFDocument = () => (
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

const generateFileName = (data) => `${sanitize(data.title)} - CV.pdf`


export default function CVPDFButton(props) {
    const {data} = props;
    return (
        <div className="CVPDFButton">
            <PDFDownloadLink
                document={<CVPDFDocument />}
                fileName={generateFileName(data)}
            >
                Download as PDF
            </PDFDownloadLink>
        </div>
    )
};

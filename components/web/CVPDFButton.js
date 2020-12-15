import React from 'react';
import Button from '@material-ui/core/Button';
import sanitize from "sanitize-filename";

const generateFileName = (data) => `${sanitize(data.title)} - CV.pdf`;

export default function CVPDFButton(props) {
    const {data} = props;

    return (
        <div className="CVPDFButton">
            <Button
                variant="contained"
                color="primary"
            >
                Download as PDF
            </Button>
        </div>
    )
};

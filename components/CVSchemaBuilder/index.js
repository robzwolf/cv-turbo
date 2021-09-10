import baseSchema from "../../data/cvBaseSchema.json";
import objectDeepReplace from "../helpers/objectDeepReplace";

class CVSchemaBuilder {
    constructor(formData) {
        if (formData && Object.keys(formData).length > 0) {
            this.formData = formData;
        }
    }

    _buildDateBlock(label) {
        if (!label) {
            label = "Date";
        }
        const years = ["(blank)"];
        const howFarInTheFutureToGo = 30;
        for (let i = 1900; i <= (new Date().getUTCFullYear() + howFarInTheFutureToGo); i++) {
            years.push(i);
        }

        return {
            "type": "object",
            "title": label,
            "properties": {
                "year": {
                    "type": "string",
                    "title": "Year",
                    "enum": years
                },
                "month": {
                    "type": "string",
                    "title": "Month",
                    "enum": ["(blank)", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    "enumNames": ["(blank)", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                }
            }
        };
    }

    buildSchema() {
        const schema = baseSchema;

        // Fill out the date blocks
        const keysToReplace = {
            "activityStart": this._buildDateBlock("Start Date"),
            "activityEnd": this._buildDateBlock("End Date")
        }
        objectDeepReplace(schema.jsonSchema, keysToReplace);

        // Copy over form data
        if (this.formData) {
            schema.formData = this.formData;
        }

        this.finalSchema = schema;
    }

    getSchema() {
        return this.finalSchema;
    }
}

export default CVSchemaBuilder;

import baseSchema from "../data/cvBaseSchema.json";

class CVSchemaBuilder {
    constructor(formData) {
        if (formData && Object.keys(formData).length > 0) {
            this.formData = formData;
        } else {
            // this.formData = exampleFormData;
        }
    }

    buildSchema() {
        const schema = baseSchema;
        schema.formData = this.formData;
        this.finalSchema = schema;
    }

    getSchema() {
        return this.finalSchema;
    }
}

export default CVSchemaBuilder;

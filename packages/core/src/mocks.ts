import { ConstraintsMapping } from "./interfaces";

const a : ConstraintsMapping = {
    "__self": {

    },
    "path.to.collection" : {
        uniqueBy: ["key.property.path", "key2"],
        or: {
            constraints: [{ __self: { length: 3 }}, { __self: { length: 4 }}, { __self: { length: 2 }}],
        },
        length: {
            max: 100,
            min: {
                __inject: "some.path"
            },
            __prerequisites: {
                "__self" : {
                    forEach: {
                        "path.to.object.in.each.item": {
                            // more validations
                        }
                    }
                }
            }
        },
        forEach: {
            "path.to.object.in.each.item": {
                // more validations
            }
        },
        specialValidation: true
    },
    "path.to.obj" : {
        contains: {
            __prerequisites: {
                "__self" : {
                    hasProperty: "propertyName"
                }
            }
        },
        format: {

        },
    }
}
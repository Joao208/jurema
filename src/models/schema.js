export const schema = {
    "models": {
        "AnimalModel": {
            "name": "AnimalModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "species": {
                    "name": "species",
                    "isArray": false,
                    "type": {
                        "enum": "Species"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "breed": {
                    "name": "breed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "enum": "Sex"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": {
                        "enum": "Size"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "personality": {
                    "name": "personality",
                    "isArray": false,
                    "type": {
                        "enum": "Personality"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "is_castrated": {
                    "name": "is_castrated",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "has_chip": {
                    "name": "has_chip",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "fiv": {
                    "name": "fiv",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "felv": {
                    "name": "felv",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "photoKey": {
                    "name": "photoKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "AnimalModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Personality": {
            "name": "Personality",
            "values": [
                "CALM",
                "CURIOUS"
            ]
        },
        "Size": {
            "name": "Size",
            "values": [
                "SMALL",
                "BIG"
            ]
        },
        "Sex": {
            "name": "Sex",
            "values": [
                "MALE",
                "FAMALE"
            ]
        },
        "Species": {
            "name": "Species",
            "values": [
                "DOG",
                "CAT"
            ]
        }
    },
    "nonModels": {},
    "version": "14bfd88d5d44347091a42b07b2d82762"
};
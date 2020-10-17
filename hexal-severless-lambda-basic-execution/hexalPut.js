'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.documentClient();

    let responseBody = "";
    let statusCode = 0;

    const params = {
        TableName: "Procuct",
        Items: {
            id: '12345'
            productname: 'Solar panels'

        }
    }
    try{
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch(err) {
        responseBody = `Unable to put product: ${err}`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };
    return response
};
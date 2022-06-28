const yup = require('yup');

exports.verifyData = yup.object().shape({
    text: yup.string().required(),
})

exports.verifyCompleted = yup.object().shape({
    completed: yup.boolean().required()
})
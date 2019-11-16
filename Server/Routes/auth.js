const express = require('express');

const router = new express.Router();

function validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = "";

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
        isFormValid = false;
        errors.email = 'Please provide a Username / Email address';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide a password';
    }

    if (!isFormValid) {
        message = 'Check form for errors';
    } else {
        message = 'Credentials validated';
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

router.post('/login', (req, res) => {
    console.log(req.body);
    const validationResult = validateLoginForm(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    return res.status(200).json({
        success: true,
        message: validationResult.message
    });
});

module.exports = router;
const response = require('../../network/response');
const ApiController = require('./apiController');
const express = require('express');

const router = express.Router();
const controller = new ApiController();

router.get('/',
    async (req, res, next) => {
        try {
            const data = await controller.getData();
            response.success(req, res, data, 200);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
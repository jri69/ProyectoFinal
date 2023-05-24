const response = require('../../network/response');
const UserController = require('./userController');
const express = require('express');

const router = express.Router();
const controller = new UserController();

router.get('/promedio-edad',
  async (req, res, next) => {
    try {
      const users = await controller.promedioEdad();
      response.success(req, res, users, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/',
  async (req, res, next) => {
    try {
      const users = await controller.getAll();
      response.success(req, res, users, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  async (req, res, next) => {
    const { id } = req.params;
    await controller
      .find(id)
      .then((data) => {
        response.success(req, res, data, 200);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const rest = await controller.add(body);
      response.success(req, res, rest, 201);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    await controller
      .edit(body, id)
      .then((data) => {
        response.success(req, res, data, 201);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.delete('/:id',
  async (req, res, next) => {
    const { id } = req.params;
    await controller
      .delete(id)
      .then((data) => {
        response.success(req, res, data, 201);
      })
      .catch((err) => {
        next(err);
      });
  }
);

module.exports = router;

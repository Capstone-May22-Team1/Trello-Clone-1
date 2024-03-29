const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const { validateBoard } = require("../validators/validators");


router.get('/boards',boardsController.getBoards );

router.post('/boards', validateBoard, boardsController.createBoard );

router.get('/boards/:id', boardsController.getBoard);

module.exports = router;
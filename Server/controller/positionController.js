const express = require('express');
const router = express.Router();
const positionBL = require('../models/positionBL');


router.route('/:id').get(async function(req,resp) {
    let userID = req.params.id;;
    let allUserPositions = await positionBL.GetAllUserPosition(userID);
    return resp.json(allUserPositions);
})
router.route('/:id').get(async function(req,resp) {
    let positionID = req.params.id;;
    let position = await positionBL.GetPositionByID(positionID);
    return resp.json(position);
})

module.exports = router;

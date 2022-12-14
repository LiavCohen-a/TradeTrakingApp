const express = require('express');
const router = express.Router();
const positionBL = require('../models/positionBL');
const positionService = require('../services/positionService');


router.route('/:id').get(async function(req,resp) {
    let userID = req.params.id;;
    let allUserPositions = await positionBL.GetAllUserPosition(userID);
    return resp.json(allUserPositions);
})

router.route('/position/:id').get(async function(req,resp) {
    let positionID = req.params.id;;
    let position = await positionBL.GetPositionByID(positionID);
    return resp.json(position);
})

router.route('/').post(async function(req,resp) {
    let newPositionData = req.body;
    let isVaildPosition = positionService.isValidPosition(newPositionData);
    if(isVaildPosition){
        newPositionData.liquidityPrice = positionService.LiquidityPrice(newPositionData.leverage,newPositionData.entryPrice,newPositionData.type);
        newPositionData.size = positionService.sizeUSD(newPositionData.margin,newPositionData.leverage);
        let dataResponse = await positionBL.AddPosition(newPositionData);
        return resp.json(dataResponse)
    }else{
        if(newPositionData.type == "Long"){
            return resp.json("Stop loss in long position must be less then entry price")
        }else{
            return resp.json("Stop loss in short position must be more then entry price")
        }
    }
})

router.route('/:id').put(async (req,resp) => {
    let updatedPositionData = req.body;
    let positionID = req.params.id;
    if(updatedPositionData.positionClosed){
        updatedPositionData.positionClosedDate = Date.now();
    }
    let dataResponse = await positionBL.UpdatePosition(positionID,updatedPositionData)
    return resp.json(dataResponse);
})

router.route('/:id').delete(async (req,resp) => {
    let positionID = req.params.id;
    let dataResponse = await positionBL.DeletePosition(positionID);
    return resp.json(dataResponse);
})

module.exports = router;

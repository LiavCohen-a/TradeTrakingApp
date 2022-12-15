const express = require('express');
const router = express.Router();
const securityQuestionBL = require('../models/securityQuestionBL');


router.route('/').get(async function(req,resp) {
    let allQuestions = await securityQuestionBL.GetAllQuestions();
    return resp.json(allQuestions);
})

router.route('/:id').get(async function(req,resp) {
    let questionID = req.params.id;;
    let question = await securityQuestionBL.GetQuestionByID(questionID);
    return resp.json(question);
})

router.route('/').post(async function(req,resp) {
    let newQuestionData = req.body;
    let dataResponse = await securityQuestionBL.AddQuestion(newQuestionData);
    return resp.json(dataResponse)
})

router.route('/:id').put(async (req,resp) => {
    let updatedQuestionData = req.body;
    let questionID = req.params.id;
    let dataResponse = await securityQuestionBL.UpdateQuestion(questionID,updatedQuestionData)
    return resp.json(dataResponse);
})

router.route('/:id').delete(async (req,resp) => {
    let questionID = req.params.id;
    let dataResponse = await securityQuestionBL.DeleteQuestion(questionID);
    return resp.json(dataResponse);
})

module.exports = router;

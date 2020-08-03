import express from 'express';
const articleRouter = express.Router();
const articleController = require('../controllers/articles/thaiJokes.controller');

articleRouter
    .route('/thaijoke/')
    .get(articleController.getListArticleThaiJoke)
    .post(articleController.createArticleThaiJoke);

articleRouter
    .route('/thaijoke/:id')
    .get(articleController.getArticleThaiJokesDetail)
    .put(articleController.updateArticleThaiJoke)
    .delete(articleController.removeArticleThaiJoke);

articleRouter.route('/thaijoke/like/:id').get(articleController.updateLikeArticleThaiJoke);
articleRouter.route('/thaijoke/dislike/:id').get(articleController.updateDisLikeArticleThaiJoke);

module.exports = articleRouter;

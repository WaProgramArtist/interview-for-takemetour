const authorization = require('../authorization');

const loginRouter = require('./login.route');
const userRouter = require('./user.route');
const articleRouter = require('./article.route');

module.exports = (app: any) => {
    app.use('/login', loginRouter);
    app.use('/user', authorization, userRouter);
    app.use('/article', authorization, articleRouter);
};

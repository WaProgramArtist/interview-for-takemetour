const ThaiJokes = require('../../models/articles/thaiJokes.model');

exports.getListArticleThaiJoke = async (req: any, res: any) => {
    try {
        const listThaiJoke = await ThaiJokes.find({});
        res.send(listThaiJoke);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getArticleThaiJokesDetail = async (req: any, res: any) => {
    try {
        const articleThaiJokeId = req.params.id;
        const thaiJoke = await ThaiJokes.findById(articleThaiJokeId);

        res.send(thaiJoke);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createArticleThaiJoke = async (req: any, res: any) => {
    try {
        const { titleTh, titleEn, detailTh, detailEn } = req.body;

        const newThaiJoke = new ThaiJokes({
            title_th: titleTh,
            title_en: titleEn,
            detail_th: detailTh,
            detail_en: detailEn,
            like: 0,
            dislike: 0,
        });

        await newThaiJoke.save();

        res.send(`Add article thai-joke --> ${titleEn} has success.`);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateArticleThaiJoke = async (req: any, res: any) => {
    try {
        const articleThaiJokeId = req.params.id;
        const { titleTh, titleEn, detailTh, detailEn, like, dislike } = req.body;

        await ThaiJokes.findOneAndUpdate(
            {
                _id: articleThaiJokeId,
            },
            {
                title_th: titleTh,
                title_en: titleEn,
                detail_th: detailTh,
                detail_en: detailEn,
                like: like,
                dislike: dislike,
            },
            {
                new: false,
                upsert: true,
            }
        );

        res.send(`Edit article thai-joke --> ${titleEn} has success.`);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.removeArticleThaiJoke = async (req: any, res: any) => {
    try {
        const articleThaiJokeId = req.params.id;
        await ThaiJokes.deleteOne({ _id: articleThaiJokeId });

        res.send(`delete article thai-joke --> ${articleThaiJokeId} has success.`);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateLikeArticleThaiJoke = async (req: any, res: any) => {
    try {
        const articleThaiJokeId = req.params.id;

        await ThaiJokes.findOneAndUpdate(
            {
                _id: articleThaiJokeId,
            },
            {
                $inc: {
                    like: +1,
                },
            },
            {
                new: false,
                upsert: true,
            }
        );

        res.send(`Add like articleThaiJokeID --> ${articleThaiJokeId} has success.`);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateDisLikeArticleThaiJoke = async (req: any, res: any) => {
    try {
        const articleThaiJokeId = req.params.id;

        await ThaiJokes.findOneAndUpdate(
            {
                _id: articleThaiJokeId,
            },
            {
                $inc: {
                    dislike: +1,
                },
            },
            {
                new: false,
                upsert: true,
            }
        );

        res.send(`Add dislike articleThaiJokeID --> ${articleThaiJokeId} has success.`);
    } catch (err) {
        res.status(500).send(err);
    }
};

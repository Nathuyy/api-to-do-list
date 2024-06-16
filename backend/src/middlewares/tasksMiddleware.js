const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined || body.title === '') {
        return res.status(400).json({ message: 'O campo "title" é obrigatório' });
    }

    next();
}

module.exports = {
    validateBody
}
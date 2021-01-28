const user = require('../models').User

module.exports = {
    login(req, res) {
        name = req.query.name;
        password = req.query.password
        var user_prompt;
        user.findOne({
            where : { name : name }
        }).then((user) => {
            user_prompt = user;
            if (password === user_prompt.password) {
                res.status(200).send("Logged in successfully")
            } else {
                res.status(403).send("Password or Username is not right")
            }
        }).catch((error) => {
            res.status(400).send("Password or Username is not right")
        });
    }
}
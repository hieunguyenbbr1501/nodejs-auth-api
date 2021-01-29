const user = require('../models').User

module.exports = {
    login(req, res) {
        console.log(req.body);
        name = req.body.username;
        password = req.body.password
        var user_prompt;
        user.findOne({
            where : { name : name }
        }).then((user) => {
            user_prompt = user;
            if (password === user_prompt.password) {
                let data = { 'accessToken' : password }
                res.status(200).send(data)
            } else {
                res.status(403).send("Password or Username is not right")
            }
        }).catch((error) => {
            res.status(403).send("Password or Username is not right")
        });
    }
}
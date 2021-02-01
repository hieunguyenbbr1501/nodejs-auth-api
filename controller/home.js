const jwt = require("jsonwebtoken");
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
                let data = { 'accessToken' : jwt.sign({name: name} , 'test', { expiresIn: 60*60 }) }
                console.log(data);
                res.status(200).send(data)
            } else {
                console.log('test')
                res.status(403).send("Password or Username is not right")
            }
        }).catch((error) => {
            console.log(error)
            res.status(403).send("Password or Username is not right")
        });
    },
    dashboard(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify([
            {
                "name": "Month To Date",
                "value": 10000,
                "currencyUnit": "$",
                "important": false
            },
            {
                "name": "Estimated Spend",
                "value": 10000,
                "currencyUnit": "$",
                "important": false
            },
            {
                "name": "Last Month",
                "value": 9000,
                "currencyUnit": "$",
                "important": false
            },
            {
                "name": "Change from Last Month",
                "value": 1000,
                "currencyUnit": "$",
                "important": true
            }
        ]));
    },
    service(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify([
            {
                "name": "EC2",
                "price": 100.1,
                "currency": "$",
                "color": "yellow"
            },
            {
                "name": "S3",
                "price": 120.6,
                "currency": "$",
                "color": "blue"
            },
            {
                "name": "EFS",
                "price": 100.1,
                "currency": "$",
                "color": "red"
            },
            {
                "name": "SUPPORT",
                "price": 100.1,
                "currency": "$",
                "color": "green"
            },
            {
                "name": "OTHER",
                "price": 227.7,
                "currency": "$",
                "color": "orange"
            }
        ]));
    },
    instance(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify([
            {
                "name": "T2 Medium",
                "demand": 1021.22,
                "reserved": 0
            },
            {
                "name": "T2 Nano",
                "demand": 2184.22,
                "reserved": 0
            },
            {
                "name": "M4.Large",
                "demand": 1021.22,
                "reserved": 0
            },
            {
                "name": "T2 Micro",
                "demand": 1021.22,
                "reserved": 1000
            },
            {
                "name": "M3.Medium",
                "demand": 1021.22,
                "reserved": 0
            },
            {
                "name": "T2 Small",
                "demand": 1021.22,
                "reserved": 0
            }
        ]))
    }
}
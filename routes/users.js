var express = require('express');
var router = express.Router();

var users = {
    "users": [
        {
            "id": 123,
            "name": "Jane Doe",
            "phones": {
            "home": "800-123-4567",
            "mobile": "877-123-1234"
            },
            "email": [
            "jd@example.com",
            "jd@example.org"
            ],
            "dateOfBirth": "1980-01-02T00:00:00.000Z",
            "registered": true
        },
        {
            "id": 456,
            "name": "Peter Nolan",
            "phones": {
            "home": "800-123-3498",
            "mobile": "877-432-1278"
            },
            "email": [
            "pt@example.com",
            "pt@example.org"
            ],
            "dateOfBirth": "1983-01-09T00:00:00.000Z",
            "registered": false
        }
    ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(users);
});

router.get('/:id', function(req, res, next) {
    var found = false;
    users['users'].forEach(user => {
        if(user.id == req.params.id) {
            res.json(user)
            found = true;
        }
    });
    if(!found) {
        res.status(404).send('Sorry, item not found!');
    }
});

/* POST a new user */
router.post('/', function(req, res, next) {
    var new_user = req.body;
    new_user.id = users['users'][users['users'].length-1].id + 1;
    users['users'].push(new_user);
    res.status(200).send('User ' + req.body.name + ' has been successfully added');
});

/* PUT user by Id */
router.put('/:id', function(req, res, next) {
    var updated_user = req.body;
    var found = false;
    users['users'].forEach(user => {
        if(user.id == req.params.id) {
            updated_user.id = user.id;
            user = updated_user;
            res.status(200).send('User '+ req.body.name + 'has been successfully updated');
            found = true;
        }
    });
    if(!found) {
        res.status(404).send('Sorry, item not found!');
    }
});

/* DELETE user by Id */
router.delete('/:id', function(req, res, next) {
    var found = false;
    users['users'].forEach(user => {
        if(user.id == req.params.id) {
            // TODO: Delete user
            res.status(200).send('User with id'+ req.params.id + 'has been successfully removed');
            found = true;
        }
    });
    if(!found) {
        res.status(404).send('Sorry, item not found!');
    }
});

module.exports = router;

const userModel = require("../models/userModel");

// A mongoose query can be executed in one of two ways. First, if you pass
// in a callback function, Mongoose will execute the query asynchronously
// and pass the results to the callback.

exports.getUsers = (req, res) => {
     userModel.find({ }, (err, users) => {
        if(err) {
            res.status(400).send({
                message: "Error while getting users"
            });
        }
        res.status(200).send(users);
    })
};

exports.getUser =  (req, res) => {
    userModel.find({userId: req.params.userId}, (err, user) => {
        if(err) {
            res.status(400).send({
                message: "error while getting users!!!" + err.message
            });
        }
        res.status(200).send(user);

    })
};

exports.createUser =  (req, res) => {
    const user = new userModel(req.body);
    user.save((err) => {
        if(err) {
            res.status(400).send({
                message: err.message
            });
        }
        res.status(201).send('User created successfully!')
    })
};

exports.updateUser =  (req, res) => {
    userModel.findOneAndUpdate({
        userId: req.params.userId
    }, 
    req.body,
     (err) => {
        if(err) {
            res.status(400).send({
                message: err.message
            });
        }
        res.status(204).send();
    })
};

exports.deleteUser = (req, res) => {
    userModel.deleteOne({userId: req.params.userId}, (err) => {
        if (err) {
            res.status(400).send({
                message: err.message
            });
        }
        res.status(204).send();
    });
};
  
 
 
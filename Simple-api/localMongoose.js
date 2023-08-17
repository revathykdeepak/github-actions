const mongoose = require("mongoose")
//mongo instead of localhost for docker-compose
mongoose.connect(
    // connect to docker container running mongodb
    "mongodb://host.docker.internal:27017/users",
    { useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true},
    err => {
      console.log(err);
    }
  );

  module.exports = mongoose;
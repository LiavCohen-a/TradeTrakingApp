let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TradingDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
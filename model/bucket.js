var mongoose = require("mongoose");
var config = require("../config");
var RateBuckets = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: config.rateLimits.ttl
    },
    ip: {
        type: String,
        required: true,
        trim: true
    },
    hits: {
        type: Number,
        default: 1,
        required: true,
        min: 0,
        max: config.rateLimits.maxHits
    }
})

module.exports = mongoose.model('bucket', RateBuckets);
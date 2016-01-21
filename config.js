"use strict";

module.exports = {
    secretKey : "HelloWorld",
    rateLimits: {
        ttl: 60*1000,
        maxHits: 10
    }
}
"use strict";

module.exports = {
    secretKey : "HelloWorld",
    rateLimits: {
        ttl: 10 * 60 * 1000,
        maxHits: 10
    }
}
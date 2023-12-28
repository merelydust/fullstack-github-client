const Redis = require("ioredis");
const test = async() => {
    const redis = new Redis();
    const keys = await redis.keys('*');
    redis.quit();
}
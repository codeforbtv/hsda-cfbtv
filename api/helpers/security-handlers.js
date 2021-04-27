module.exports = {
  appid: (req, authOrSecDef, scopesOrApiKey, cb) => {
    const appid = req.headers[authOrSecDef.name];
    if (appid !== 'social-safety-net') {
      cb({
        message: `Invalid header "${authOrSecDef.name}"`,
        statusCode: 401,
      });
    }
    else {
      cb();
    }
  },
  appkey: (req, authOrSecDef, scopesOrApiKey, cb) => {
    const appkey = req.headers[authOrSecDef.name];
    if (appkey !== 'alohomora') {
      cb({
        message: `Invalid header "${authOrSecDef.name}"`,
        statusCode: 401,
      });
    }
    else {
      cb();
    }
  }
};
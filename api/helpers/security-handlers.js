const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');

const {
  AUTH0_DOMAIN,
  AUTH0_API_IDENTIFIER,
  AUTH0_EMAIL_CUSTOM_CLAIM_NAMESPACE,
} = process.env;

const jwksClient = jwks({
  cache: true,
  jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
});

function getKey(header, callback){
  jwksClient.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

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
  },
  jwt: (req, authOrSecDef, scopesOrApiKey, cb) => {
    const token = req.headers[authOrSecDef.name].replace(/^[Bb]earer /, '');
    try {
      jwt.verify(token, getKey, {
        algorithm: 'RS256',
        audience: `${AUTH0_API_IDENTIFIER}`,
        issuer: `https://${AUTH0_DOMAIN}/`,
      }, (err, decoded) => {
        if (err) {
          cb({
            ...err,
            statusCode: 401,
          });
        }
        console.log(decoded[`${AUTH0_EMAIL_CUSTOM_CLAIM_NAMESPACE}email`]);
        cb();
      });
    }
    catch(ex) {
      cb({
        ...ex,
        statusCode: 401,
      });
    }
  },
};
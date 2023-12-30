module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    fallback.querystring = false;
    config.resolve.fallback = fallback;
  
    return config;
  }
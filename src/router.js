const {handleMain, handleAsset, handleSearch, handleError} = require('./handler');

const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        handleMain(response);
    } else if (endpoint.includes('public')) {
        handleAsset(response, endpoint);
    } else if( endpoint.includes('/search')){
        handleSearch( response,endpoint);
    }
    else {
        handleError(response);
    }
  };

  module.exports = router;
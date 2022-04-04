const APIError = require('../service/APIError');

// Ici on s'assure de la provenance de l'erreur, on la corrige si nécessaire et on la publie côté client
const handleErrors = async (err, req, res, next) => {
  let myError;
  if (err instanceof APIError){
    myError = err;
  } else {
    myError = new APIError(err, req.url);
  }
  await myError.log();
  res.status(myError.status).json(myError.message);
}

module.exports = handleErrors;
const {appendFile} = require("fs/promises");
const path = require('path');

class APIError extends Error{
  constructor(message, url, status = 500){
    //On utilise le constructeur de la classe Error
    super(message);
    this.url = url;
    this.status = status;
  };

  /**
   * Méthode pour logger les erreurs en 2 niveaux : console ET archivage
   * @param {string} message
   * @returns {object} instance de APIError
   */
  async log(){
    // Premier niveau : retour console
    console.error(this.url, this.message, new Date());
    // Second niveau, on ajoute une trace dans un fichier de log journalier
    const logPath = path.resolve(__dirname, '../../log/');
    const fileName = new Date().toISOString().split('T')[0]+'.csv';
    await appendFile(path.resolve(logPath,fileName), `${new Date().toLocaleTimeString()},${this.url},${this.message}\n`);
  };
};

module.exports = APIError;
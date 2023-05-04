
export default class User {
    /**
     * Constructeur
     * @constructor
     *
     * @param {String} id        - Identifiant de l'utilisateur
     * @param {String} lastname  - Nom de l'utilisateur
     * @param {String} firstname - Prénom de l'utilisateur
     * @param {Date}   birthDate - Date de naissance
     * @param {String} address   - Adresse postale
     * @param {String} phone     - Téléphone (mobile ou fixe)
     * @param {String} email     - Email
     */
    constructor({id, lastname, firstname, birthDate, address, phone, email}) {
      this.id        = id;
      this.lastname  = lastname;
      this.firstname = firstname;
      this.birthDate = birthDate;
      this.address   = address;
      this.phone     = phone;
      this.email     = email;
    }
  }
  

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

    /**
     * 
     * @param {String} phoneNumber 
     * @returns {boolean}
     */
    static phoneIsValid(phoneNumber) {
      return phoneNumber.match(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm)
    }
  }
  
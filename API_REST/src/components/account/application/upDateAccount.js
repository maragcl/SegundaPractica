/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ id, account, name, entity, money }) => {// parameters
      const newAccount = {
        account: account,
        name: name,
        entity: entity,
        money: money
      }
      return AccountRepository.update(id, newAccount)
    }
  }
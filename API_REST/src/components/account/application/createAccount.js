/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ account, name, entity, money }) => {
      const newAccount = {
        account: account,
        name: name,
        entity: entity,
        money: money
      }
      return AccountRepository.add(newAccount)
    }
  }
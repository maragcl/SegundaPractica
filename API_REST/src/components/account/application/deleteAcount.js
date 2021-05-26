
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ id }) => {
      console.log("ID=>",id)
      if (!id) throw new Error('Entity does not exist')
      return AccountRepository.delete(id)
    }
  }
  
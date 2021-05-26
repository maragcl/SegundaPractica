/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ id, money }) => { // parameters
        
        if (!id) throw new Error('User does not exist')
        //Obtenemos la cuenta
        const Account = await AccountRepository.getById(id)

        const AccountMoney = parseInt(Account.money)
        const newAccountMoney = AccountMoney - parseInt(money)

        const newAccount = {
        money: newAccountMoney
      }
      return AccountRepository.update(id, newAccount)
    }
  }
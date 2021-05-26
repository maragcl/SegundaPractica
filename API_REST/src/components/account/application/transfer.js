/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ idOrigin, idDestiny, money }) => { // parameters
        
        if (!idOrigin) throw new Error('Account does not exist')
        const DestinyAccount = await AccountRepository.getById(idDestiny)
        const DestinyAccountMoney = parseInt(DestinyAccount.money)

        if (!idDestiny) throw new Error('Account does not exist')

        const OriginAccount = await AccountRepository.getById(idOrigin)
        const OriginAccountMoney = parseInt(OriginAccount.money)

        if(money <= OriginAccountMoney){
            const updatedAccountMoney = money + DestinyAccountMoney
            const newDestinyAccount = {
                money: updatedAccountMoney
            }

            const updatedAccountOriginMoney = OriginAccountMoney - money
            const newOriginAccount = {
                money: updatedAccountOriginMoney
            }
            AccountRepository.update(idOrigin, newOriginAccount)
            return AccountRepository.update(idDestiny, newDestinyAccount)
        }else{
            throw new Error('There is not enought money in the origin account')
        }
    }
}
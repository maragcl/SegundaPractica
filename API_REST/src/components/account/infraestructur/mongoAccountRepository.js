const MongoLib = require('../../../lib/mongo')

class MongoContactsRepository { 
  constructor () {
    this.collection = 'account'
    this.mongoDB = new MongoLib()
  }

  async add (account) {
    const _id = await this.mongoDB.create(this.collection, account)
    return { _id, ...account }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async update (id, account) {
    return this.mongoDB.update(this.collection, id, account)
  }

  async delete (id) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getDocumentInfo () {
    return await this.mongoDB.getInfo(this.collection)
  }

  async getById (id) {
    return await this.mongoDB.get(this.collection, id, null)
  }

  async getByEntity (entity) {
    return await this.mongoDB.getByEntity(this.collection, entity)
  }
}




module.exports = MongoContactsRepository
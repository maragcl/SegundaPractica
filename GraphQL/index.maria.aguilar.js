const { ApolloServer, gql } = require('apollo-server')
const { v4: uuid } = require('uuid')
const axios = require('axios');

const url="http://localhost:3000"

var accountsArray = []

const typeDefs = gql`
  type Entity{
    id: ID!
    name: String!
  }
  type Account {
    id: ID!
    account: String!
    name: String!
    entity: String!
    money: Int!
  }
  type AllMoney{
    data: Int!
    message: String!
  }
  type Mutation {
    "Se transferira el dinero a una nueva cuenta"
    tranferMoney: String!
  }
  type Query {
    allMoneyOfEntity(id: ID!): AllMoney!
    account(id:ID!): Account!
  }
`

const resolvers = {
  Query: {

    allMoneyOfEntity: (root, args) =>{
      const { id } = args
      return getAllMoney(id)
    },

    account: (root, args)=> {
      const { id } = args
      return getOneAccount(id)
    }
  },
  Mutation: {
    tranfer: async (root, args) =>{
      const { idOrigin } = args
      const { idDestiny } = args
      const { money } = args

      const result =  transfer(idOrigin, idDestiny, money)
      return result
    }
  } 
}

//Método que obtiene todo el dinero de una entidad
const getAllMoney = async (id)=>{
  const { data } = await axios(`http://localhost:3001/api/accounts/allMoney/${id}`)
  return data.results
}

//Método que obtiene una cuenta por su ID
const getOneAccount = async (id)=>{
  const  {data}  = await axios(`http://localhost:3001/api/accounts/${id}`)
  return data
}

//Método que transfiere dinero
const transferirDinero = async (idOrigin, idDestiny, money)=>{
  const  {data}  = await axios(`http://localhost:3001/api/accounts/transfer`, 
                  { params: 
                    { 
                      idOrigin, 
                      idDestiny, 
                      money }
                    })

  return data
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at: ${url}`)
})
var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')

const TEMP_USER = {
    _id: '1',
    email: 'spencer@handlebarlabs.com'
}

//construct our schema, using graphQL schema language
const typeDefs = buildSchema(`
type User{
    _id: String
    email: String
}

type Query {
    currentUser: User
}

type Mutation{
    login(email: String!, password: String!): User
    signup(email: String!, password: String!): User
}
`);

//root provides a resolver function for each api endpoint
// var root = {
//     currentUser: () => {
//         return TEMP_USER;
//     }
//     Mutation:{

//     }
// }

const root = {
      currentUser: () => {
        // TODO: Make this real
        return TEMP_USER;
      },
        login: (root, { email, password }) => {
          // TODO: Make this real
          return TEMP_USER;
        },
        signup: (root, { email, password }) => {
          // TODO: Make this real
          return TEMP_USER; 
        },
  };

var app = express()
app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: root,
    // Sets up testing environment to manually write api queries on server page
    graphiql: true,
}))

app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')

//Manually running (outside scope of server)

//run our graphql query '{hello}', and print out the response
// graphql(schema, '{ hello }', root).then((response)=>{
//     console.log(response)
// });
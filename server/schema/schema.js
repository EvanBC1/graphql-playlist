const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
  } = graphql;

// Dummy Data
let books = [
  { name: 'Name of the Wind', genre:'Fantasy', id:'1' },
  { name: 'The Final Empire', genre:'Fantasy', id:'2' },
  { name: 'The Long Earth', genre:'Sci-Fi', id:'3' },
];

let authors = [
  { name: 'Patrick Rothfuss', age:44, id:'1' },
  { name: 'Brandon Sanderson', age:42, id:'2' },
  { name: 'Terry Prachett', age:66, id:'3' },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    author: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        // code to get data from db / other sources
        return _.find(books, { id: args.id })
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
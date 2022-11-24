const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { isType } = require('graphql');
const { signToken } = require('../utils/auth');
// const { countDocuments } = require('../models/User');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')

            return userData;
          }

          throw new AuthenticationError('Not logged in!')

        },

    }

};
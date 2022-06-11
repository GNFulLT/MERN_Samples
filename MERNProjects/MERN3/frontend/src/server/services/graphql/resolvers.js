import logger from '../../helpers/logger';

const resolvers = {
   RootQuery: {
   posts(root, args, context) {
   return [];
   },
   },
   RootMutation: {
      addPost(root, { post, user }, context) {
      const postObject = {
      ...post,
      user,
      id: 1,
      };
      logger.log({ level: 'info', message: 'Post was created' });
      return postObject;
      },
     },
  };
  export default resolvers;
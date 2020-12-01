const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

class Post extends Model {
  static get tableName () {
    return "posts";
  }

  static get relationMappings () {
    const User = require("./User");
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "posts.authorId",
          to: "users.id"
        }
      }
    };
  }
}

exports.Post = Post;

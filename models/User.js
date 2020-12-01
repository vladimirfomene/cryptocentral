const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

class User extends Model {
  static get tableName () {
    return "users";
  }

  static get relationMappings () {
    const Project = require("./Project");
    const Post = require("./Post");
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "users.id",
          to: "posts.authorId"
        }
      },
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: "users.id",
          to: "projects.ownerId"
        }
      }
    };
  }
}

exports.User = User;

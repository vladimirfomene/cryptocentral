const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

class Project extends Model {
  static get tableName () {
    return "projects";
  }

  static get relationMappings () {
    const User = require("./User");
    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "projects.authorId",
          to: "users.id"
        }
      }
    };
  }
}

exports.Project = Project;

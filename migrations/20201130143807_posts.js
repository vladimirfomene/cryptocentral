/**
 * Create posts table
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("post_title");
    table.string("post_url");
    table.string("author");
    table.datetime("created_at");
    table.datetime("updated_at");
  });
};

/**
 * Drop posts table
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};

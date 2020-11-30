/**
 * Create users table
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username");
    table.string("password");
    table.datetime("created_at");
    table.datetime("updated_at");
  });
};

/**
 * Drop users table
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

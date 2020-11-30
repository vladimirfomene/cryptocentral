/**
 * Create projects table
 */
exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("project_title");
    table.string("project_brief");
    table.string("project_url");
    table.string("whitepaper_url");
    table.datetime("created_at");
    table.datetime("updated_at");
  });
};

/**
 * Drop projects table
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl.string("name").notNullable();
    tbl.unique("name");
    tbl.string("description");
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
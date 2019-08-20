exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("project_name").notNullable();
    tbl.unique("project_name");
    tbl.string("description");
    tbl.boolean("completed").notNullable();
  })

    .createTable("task", tbl => {
      tbl.increments();
      tbl.string('notes');
      tbl.string("description").notNullable();
      tbl.boolean("completed").notNullable() ;
      tbl.integer("project_id").notNullable() .unsigned() .references("id") .intable("projects")
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
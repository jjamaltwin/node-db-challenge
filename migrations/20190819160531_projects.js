exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments()
    tbl.string("project_name").notNullable() .unique()
    tbl.string("description")
    tbl.integer("completed").notNullable().defaultTo(0);
  })

    .createTable("task", tbl => {
      
      tbl.increments()
      tbl.string('notes')
      tbl.string("description").notNullable()
      tbl.integer("completed").defaultTo(0).notNullable()
      tbl
        .integer("project_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("projects");
    })

    .createTable("resource", tbl => {
      tbl.increments()
      tbl.string('name').notNullable().unique();
      
    })

    // Many to Many

    .createTable("project_resource", tbl => {
      tbl.increments()
      tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");
      tbl
      .integer("resource_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("resource");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("projects");
    
};
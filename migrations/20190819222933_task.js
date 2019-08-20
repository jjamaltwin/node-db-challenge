
exports.up = function(knex, Promise) {
    return knex.schema.createTable("task", tbl => {
      tbl.increments();
      tbl.string('notes');
      tbl.string("description").notNullable();
      tbl.boolean("completed").notNullable() ;
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("task");
  };

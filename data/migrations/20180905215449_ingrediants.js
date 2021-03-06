exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('measurement').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};

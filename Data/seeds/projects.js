

exports.seed = function(knex) {
    // Deletes entries
    return knex('projects').del()
      .then(function () {
        // Inserts entries
        return knex('projects').insert([
          {id: 1, name: 'Learn Knex', description: 'Buid a server from scratch', complete: false},
          {id: 2, name: 'Interview for Jobs', description: 'Get a job', complete: false},
          {id: 3, name: 'Work to improve', description: 'build personal apps', complete: true}
        ]);
      });
  };
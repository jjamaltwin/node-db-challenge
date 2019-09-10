exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resource').del()
      .then(function () {
        // Inserts seed entries
        return knex('resource').insert([
          {id: 1, description: 'New Resource', notes: '......', complete: false, project_id: 1},
          {id: 2, description: 'New Resource', notes: '.....', complete: false, project_id: 1},
          {id: 3, description: 'New Resource', notes: '.......', complete: false, project_id: 1},
          {id: 4, description: 'New Resource', notes: '.........', complete: false, project_id: 2},
          {id: 5, description: 'New Resource', notes: '.........', complete: false, project_id: 2},
          {id: 6, description: 'New Resource', notes: '........', complete: false, project_id: 2}
        ]);
      });
  };
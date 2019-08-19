exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('actions').del()
      .then(function () {
        // Inserts seed entries
        return knex('actions').insert([
          {id: 1, description: 'Learn SQL', notes: 'going good so far!', complete: false, project_id: 1},
          {id: 2, description: 'working with migrations', notes: 'this is not as bad as I initially thought', complete: false, project_id: 1},
          {id: 3, description: 'working with seeds', notes: 'getting the hang of this', complete: false, project_id: 1},
          {id: 4, description: 'Apply for jobs', notes: 'the hunt is on!', complete: true, project_id: 2},
          {id: 5, description: 'get an interview', notes: 'research the company and its misson', complete: true, project_id: 2},
          {id: 6, description: 'Personal coding pursuits', notes: 'making extra on the side', complete: true, project_id: 2}
        ]);
      });
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      id: 1,
      user_id: 1,
      body: 'I found this really interesting book, you should check it out',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 2,
      user_id: 2,
      body: 'I found this really cool Italian place, they have the best food',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 3,
      user_id: 2,
      body: 'No pineapples',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 4,
      user_id: 4,
      body: 'I love a full English breakfast',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 5,
      user_id: 1,
      body: 'testing ',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 6,
      user_id: 2,
      body: 'testing 2',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 7,
      user_id: 2,
      body: 'No pineapples',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 8,
      user_id: 4,
      body: 'I love a full English breakfast',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 9,
      user_id: 1,
      body: 'I found this really interesting book, you should check it out',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 10,
      user_id: 2,
      body: 'I found this really cool Italian place, they have the best food',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 11,
      user_id: 2,
      body: 'No pineapples',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 12,
      user_id: 4,
      body: 'I love a full English breakfast',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 13,
      user_id: 1,
      body: 'I found this really interesting book, you should check it out',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 14,
      user_id: 2,
      body: 'I found this really cool Italian place, they have the best food',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 15,
      user_id: 2,
      body: 'No pineapples',
      image: '',
      created_at: new Date(Date.now()),
    },
    {
      id: 16,
      user_id: 4,
      body: 'I love a full English breakfast',
      image: '',
      created_at: new Date(Date.now()),
    },
  ])
}

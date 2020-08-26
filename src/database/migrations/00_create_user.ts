import Knex from 'knex'

export const tableName = 'user'

export async function up(knex: Knex) {
    return knex.schema.createTable(tableName, table => {
        table.increments('id').primary()
        table.string('name').notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tableName)
}
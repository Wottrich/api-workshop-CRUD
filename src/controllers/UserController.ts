import { Request, Response, request, response } from 'express';
import knex from '../database/connection'
import { tableName } from '../database/migrations/00_create_user'

class UserController {

    async index(req: Request, res: Response) {

        const users = await knex(tableName).select("*")

        const serializedUsers = users.map(item => {
            return {
                id: item.id,
                name: item.name
            }
        })

        return res.status(200).json(serializedUsers)
    }

    async create (req: Request, res: Response) {
        const {
            name
        } = req.body

        const trx = await knex.transaction()

        await trx(tableName).insert({ name: name })

        await trx.commit()

        const users = await knex(tableName).select("*")

        const serializedUsers = users.map(item => {
            return {
                id: item.id,
                name: item.name
            }
        })

        return res.status(200).json(serializedUsers)

    }

    async delete (req: Request, res: Response) {
        const {
            id
        } = req.params

        const trx = await knex.transaction()

        await trx(tableName)
            .where({ id: id })
            .del()

        await trx.commit()

        const users = await knex(tableName).select("*")

        const serializedUsers = users.map(item => {
            return {
                id: item.id,
                name: item.name
            }
        })

        return res.status(200).json(serializedUsers)
    }

    async update (req: Request, res: Response) {

        const {
            id, name
        } = req.body

        console.log(id)
        console.log(name)

        const trx = await knex.transaction()

        await trx(tableName)
            .where({ id: id })
            .update({ name: name }, ['id', 'name'])

        await trx.commit()

        const users = await knex(tableName).select("*")

        const serializedUsers = users.map(item => {
            return {
                id: item.id,
                name: item.name
            }
        })

        return res.status(200).json(serializedUsers)

    }

}

export default UserController
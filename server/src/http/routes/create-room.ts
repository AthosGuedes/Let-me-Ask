import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod/v4' // zod serve para rotas que tem alguma entrada de dados, rotas de POST ou PUT
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms',
    {
      schema: {
        // estrutura da requisição que será feita para criar a sala
        body: z.object({
          // mostra os campos para fazer a requisição e a criação da sala
          name: z.string().min(1),
          description: z.string().optional(),
        }),
      },
    },
    async (request, reply) => {
      const { name, description } = request.body // armazena o valor dos campos para inserir no banco

      const result = await db
        .insert(schema.rooms) // insere no banco os valores puxados da requisição
        .values({
          name, // nomes dos campos da tabela mas puxam o resultado (varivel que armazena os valores dos campos) do request.body também
          description,
        })
        .returning()

      const insertedRoom = result[0]

      if (!insertedRoom) {
        throw new Error('Failed to create new room.')
      }

      return reply.status(201).send({ roomId: insertedRoom.id })
    }
  )
}

import { z } from "zod"
import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

export async function oddTypeRoutes(fastify: FastifyInstance) {
    fastify.get('/odd-type', async () => {
        return await prisma.oddType.findMany();
    })

    fastify.get('/odd-type/:id', async (request) => {
        const oddTypeParams = z.object({
            id: z.string()
        })

        const { id } = oddTypeParams.parse(request.params);

        return await prisma.oddType.findUnique({
            where: {
                id
            }
        });
    })

    fastify.post('/odd-type', async (request, reply) => {
        const createOddTypeBody = z.object({
            name: z.string()
        })

        const { name } = createOddTypeBody.parse(request.body);

        try {
            await prisma.oddType.create({
                data: {
                    name
                }
            })
        } catch (error) {
            return reply.status(400).send({ error })
        }

        return reply.status(201).send({})
    })

    fastify.put('/odd-type/:id', async (request, reply) => {
        const updateOddTypeBody = z.object({
            name: z.string()
        })

        const updateOddTypeParams = z.object({
            id: z.string()
        })

        const { name } = updateOddTypeBody.parse(request.body);
        const { id } = updateOddTypeParams.parse(request.params)

        try {
            await prisma.oddType.update({
                data: {
                    name
                },
                where: {
                    id
                }
            })
        } catch (error) {
            return reply.status(400).send({ error })
        }

        return reply.status(201).send({})
    })
}
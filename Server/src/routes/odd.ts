import { z } from "zod"
import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"
import { getFixtures } from "../services/odds-service"
import { ODDs } from "../services/odds-service"

export async function oddRoutes(fastify: FastifyInstance) { 
    fastify.get('/odd', async () => {
        ODDs.GenerateBTTsFirstHalf();
    })
}
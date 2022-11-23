import Fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import { authRoutes } from "./routes/auth"
import { oddRoutes } from "./routes/odd"


async function bootstrap() {
    const fastify = Fastify({
      logger: true,
    })
  
    await fastify.register(cors, {
      origin: true,
    })  
   
    await fastify.register(jwt, {
      secret: 'aJOchQr3d9',
    })
    
    await fastify.register(authRoutes)  
    await fastify.register(oddRoutes)  
    
  
    await fastify.listen({ port: 3333, host: '0.0.0.0' })
  }
  
  bootstrap()
import express from 'express'
import { join } from 'node:path'
import 'dotenv/config'

import usersRoutes from './routes/users'
import postsRoutes from './routes/posts'
import groupsRoutes from './routes/groups'
import externalApiRoutes from './routes/externalApi'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/posts', postsRoutes)
server.use('/api/v1/groups', groupsRoutes)
server.use('/api/v1/externalapi', externalApiRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
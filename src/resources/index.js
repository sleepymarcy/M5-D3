import express from 'express'
import fs from 'fs'
import uniqid from 'uniqid'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const blogPostsRouter = express.Router()

export default blogPostsRouter
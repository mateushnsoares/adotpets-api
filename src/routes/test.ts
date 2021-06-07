import { Router } from 'express'

import { TestController } from '@controllers/Test'

export const testRouter = Router()

testRouter.get('/', TestController.index)

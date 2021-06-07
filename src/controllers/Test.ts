import { Request, Response } from 'express'

import { BaseController } from './base-controller'

export class TestController extends BaseController {
	static async index(req: Request, res: Response) {
		try {
			res.status(200).json({ ok: 'Hello world' })
		} catch (error) {
			super.handleError(res, error)
		}
	}
}

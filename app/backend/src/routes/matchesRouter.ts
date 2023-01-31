import { Router } from 'express';
import { tokenMiddleware } from '../auth/jwt';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getMatches);

matchesRouter.post('/', tokenMiddleware, MatchesController.createMatch);

matchesRouter.patch('/:id/finish', MatchesController.updateMatch);

export default matchesRouter;

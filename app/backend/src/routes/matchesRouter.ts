import { Router } from 'express';
import { tokenMiddleware } from '../auth/jwt';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getMatches);

matchesRouter.post('/', tokenMiddleware, MatchesController.createMatch);

matchesRouter.patch('/:id/finish', MatchesController.finishMatch);

matchesRouter.patch('/:id/', MatchesController.updateMatch);

matchesRouter.get('/:id', MatchesController.getMatchById);

export default matchesRouter;

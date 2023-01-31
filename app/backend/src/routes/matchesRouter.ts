import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getMatches);

matchesRouter.post('/', MatchesController.createMatch);

matchesRouter.patch('/:id/finish', MatchesController.updateMatch);

export default matchesRouter;

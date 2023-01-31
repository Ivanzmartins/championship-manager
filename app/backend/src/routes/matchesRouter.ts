import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getMatches);

export default matchesRouter;

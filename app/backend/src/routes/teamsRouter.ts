import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const router = Router();

router.get('/', TeamsController.getAllTeams);

export default router;

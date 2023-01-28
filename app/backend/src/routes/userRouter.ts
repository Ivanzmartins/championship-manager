import { Router } from 'express';
import verifyLogin from '../middlewares/loginVerify';
import UserController from '../controllers/userController';

const router = Router();

router.post('/', verifyLogin, UserController.login);
router.get('/validate', UserController.validate);

export default router;

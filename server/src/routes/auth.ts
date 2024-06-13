import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../db';
import {authenticateJwt , SECRET}from '../middleware/'; // Assuming you have this middleware implemented

const router = Router();

// interface SignupRequestBody {
//     username: string;
//     email: string;
//     password: string;     
// }

// interface LoginRequestBody {
//     email: string;
//     password: string;
// }



router.post('/signup', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        res.status(403).json({ message: 'User already exists' });
    } else {
        const newUser = new User({ username, email, password });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in Successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid email or password' });
    }
});

router.get('/me', authenticateJwt, async (req, res) => {
    const userId = req.headers["userId"] ; 
    const user = await User.findOne({ _id: userId });
      if (user) {
        res.json({ username: user.username });
      } else {
        res.status(403).json({ message: 'User not logged in' });
      }
});

router.post('/logout', authenticateJwt, (req: Request, res: Response) => {
    // Invalidate token (in a real scenario, you would use a token blacklist or other method)
    res.json({ message: 'Logged out successfully' });
});

export default router;

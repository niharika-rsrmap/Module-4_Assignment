const express = require('express');
const { authenticateJWT, authorizeRole } = require('../middleware/authMiddleware');
const User = require('../models/user');

const router = express.Router();

// GET /api/users - Only accessible by admin
router.get('/users', authenticateJWT, authorizeRole('admin'), async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude password from results
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

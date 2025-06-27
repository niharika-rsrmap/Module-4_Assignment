module.exports = {
    generateToken: (user) => {
        const jwt = require('jsonwebtoken');
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
        return token;
    },

    verifyToken: (token) => {
        const jwt = require('jsonwebtoken');
        const secretKey = process.env.JWT_SECRET;
        try {
            const decoded = jwt.verify(token, secretKey);
            return decoded;
        } catch (error) {
            return null;
        }
    }
};
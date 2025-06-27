module.exports = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming req.user is populated by authMiddleware

        if (!userRole) {
            return res.status(403).json({ message: 'Access denied. No role found.' });
        }

        if (userRole !== requiredRole) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next();
    };
};
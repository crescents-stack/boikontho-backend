const checkUserRole = (role) => {
    return (req, res, next) => {
      const user = req.user;
      
      if (!user || user.role !== role) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
      }
  
      next();
    };
  }
  
  module.exports = checkUserRole;
  
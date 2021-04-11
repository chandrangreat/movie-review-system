const userController = require('./users/users.controller');

function checkAdmin() {
  return async function (req, res, next) {
    if (!req.query.userId) {
      res.status(403).json({ message: 'Unauthorized' });
      return;
    }

    // const isAdmin = true;

    const isAdmin = await userController.checkIfUserIsAdmin(req.query.userId);
    if (!isAdmin) {
      if (req.method === 'POST' && req.url.includes('review')) {
        next();
        return;
      }
      res.status(403).json({ message: 'Unauthorized' });
      return;
    }
    next();
  };
}

module.exports = checkAdmin;

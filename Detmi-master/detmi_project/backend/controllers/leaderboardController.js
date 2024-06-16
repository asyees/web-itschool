const { User, Leaderboard } = require('../models/models');

class LeaderboardController {
  async get_leaders(req, res) {
    try {
      const leaders = await Leaderboard.findAll({
        attributes: ['rating'],
        include: [{
          model: User,
          attributes: ['nickname']
        }],
        order: [['rating', 'DESC']],
        limit: 10
      });

      return res.json({ leaders });
    } catch (error) {
      console.error('Error fetching leaders:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new LeaderboardController();
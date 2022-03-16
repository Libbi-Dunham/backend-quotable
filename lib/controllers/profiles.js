const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res) => {
  const profile = await Profile.insert(req.body);
  res.send(profile);
  // TODO: Implement me!
});

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

router.get('/protected', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
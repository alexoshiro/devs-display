const axios = require('axios');
const Dev = require('../models/Dev');
const StoreDevValidator = require('./validators/StoreDevValidator');
const UpdateDevValidator = require('./validators/UpdateDevValidator');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    try {
      await StoreDevValidator.validateAsync(req.body);
    } catch ({ details }) {
      const messages = details.map(detail => detail.message);
      return res.status(400).json({ error: true, messages });
    }

    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(`htttps://api.github.com/users/${github_username}`);

      let { name = login, avatar_url, bio } = apiResponse.data;
      name = !name ? apiResponse.data.login : name;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
      return res.json(dev);
    } else {
      return res.status(422).json({ error: true, messages: ["Usuário já cadastado."] });
    }


  },

  async update(req, res) {
    try {
      await UpdateDevValidator.validateAsync(req.body);
    } catch ({ details }) {
      const messages = details.map(detail => detail.message);
      return res.status(400).json({ error: true, messages });
    }

    const { username } = req.params;
    const { techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username: username });

    if (dev) {
      const techsArray = techs ? parseStringAsArray(techs) : dev.techs;
      let location = {
        type: 'Point',
        coordinates: [dev.location.coordinates[0], dev.location.coordinates[1]]
      }

      if (latitude && longitude) {
        location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        }
      }

      dev = await Dev.findOneAndUpdate(
        { github_username: username },
        { techs: techsArray, location },
        { new: true }
      );
      return res.json(dev);
    } else {
      return res.json({ error: true, messages: ["Usuário não encontrado."] });
    }
  },

  async destroy(req, res) {
    const { username } = req.params;

    await Dev.deleteOne({ github_username: username });

    return res.status(204).json();
  },

  async show(req, res) {
    const { github_username } = req.params;
    const dev = await Dev.findOne({ github_username });
    if (dev) {
      return res.json(dev);
    } else {
      return res.json({ error: true, messages: ["Usuário não encontrado."] });
    }
  }
}
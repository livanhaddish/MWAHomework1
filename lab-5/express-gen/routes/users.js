{
  const axios = require('axios')
  const express = require('express');
  const router = express.Router();

  const baseURL = 'http://jsonplaceholder.typicode.com';
  const usersURL = `${baseURL}/users/`
  const photosURL = `${baseURL}/photos/`
  /* GET users listing. */
  router.get('/', async function (req, res, next) {
    try {
      let responseObj = await axios.get(usersURL);
      let photoList = [];
      responseObj.data.forEach(user => {
        photoList.push(axios.get(photosURL + user.id));
      });

      let images = await axios.all(photoList)
      images.forEach(image => {
        let user = responseObj.data.find(item => item.id == image.data.id)
        user.photoURL = image.data.thumbnailUrl
      })
      res.render('users', { userList: responseObj.data });
    } catch (err) {
      next(err);
    }
    res.end();
  });

  module.exports = router;
}
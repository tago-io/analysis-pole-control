const path = require('path');

module.exports = (account, picture) => {
  picture = picture && picture.metadata ? picture.metadata.file : null;

  if (!picture) {
    picture = {
      url: 'https://api.tago.io/file/5b3e62c766eac70001ce7e38/logo.jpg',
    };
  } else if (!['.jpeg', '.jpg', '.gif', '.png'].includes(path.extname(picture.url))) {
    account.files.delete([picture.path]);
    throw 'The Pole Image must be .jpeg, .gif or .png.';
  }
};

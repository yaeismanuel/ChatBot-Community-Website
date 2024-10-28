const websites = [
  {
    name: 'CodeBuddy Solutions Official',
    description: 'Consequat est est consequat consectetur deserunt nulla sunt irure. Adipisicing voluptate magna nisi consequat aute.',
    link: 'https://codebuddysltns.verahost.ph',
    dev: 'renzdev',
    devFb: '@bosscleo3233',
    devFbLink: 'sjsjj'
  },
  {
    name: 'Spotify Music Downloader',
    description: 'Ex Lorem enim aliqua do consequat consequat nisi. Aliqua cillum proident laborum nisi ut sunt est deserunt laborum enim laboris in occaecat ex.',
    link: 'https://spotify-downloader.verahost.ph',
    dev: 'marjhun',
    devFb: 'Marjhun Baylon',
    devFbLink: 'sjsj'
  },
  {
    name: 'Jabilee Belivery',
    description: 'Non sunt ex veniam laborum ea et aliqua commodo do officia nostrud mollit. Labore tempor irure irure magna aute eiusmod dolore esse sint pariatur ipsum officia ullamco eu.',
    link: 'https://jabilee-official.verahost.ph',
    dev: 'mr.bee',
    devFb: 'Jabilee Official',
    devFbLink: 'djdj'
  },
  {
    name: 'McBonalds Official Website',
    description: 'Dolore nulla officia reprehenderit sunt. Anim enim pariatur consequat exercitation dolore.',
    link: 'https://mcbonalds-official.verahost.ph',
    dev: 'mr.bonalds',
    devFb: 'McBonalds Official',
    devFbLink: 'ejej'
  },
  {
    name: 'CornHub PH',
    description: 'Ullamco labore mollit fugiat magna laborum ipsum id aliqua fugiat ut ad officia. Ad ex cillum non qui nisi velit nostrud sit aute.',
    link: 'https://cornhubph-official.verahost.ph',
    dev: 'corndev',
    devFb: 'CornHub PH Official',
    devFbLink: 'https://cornhubph-official.verahost.ph'
  }
]

const resObject = require('../configs/response');

const getWebsites = async (req, res) => {
  try {
    setTimeout(function() {
      res.json(resObject(websites, true));
    }, 3000);
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch websites.'));
    console.log(e);
  }
}

module.exports = {
  getWebsites
}
const announcements = [
  {
    message: 'Hello everyone! we are happy to inform you that this website is now the official website for our community.',
    author: 'Juan Dela Cruz',
    role: 'Moderator',
    date: '10/16/2024',
    likes: 7,
    liked: true
  },
  {
    message: 'Id velit veniam ad qui laborum. Eiusmod nostrud do aliqua exercitation eu aute cillum id.',
    author: 'Juan Dela Cruz',
    role: 'Moderator',
    date: '10/12/2024',
    likes: 14,
  },
  {
    message: 'Quis labore ex elit eu ad aliqua. Qui proident Lorem non aliquip laboris do minim pariatur. Enim et sit reprehenderit culpa anim aliquip ullamco occaecat sint irure sint do sint.',
    author: 'Juan Dela Cruz',
    role: 'Moderator',
    date: '10/8/2024',
    likes: 23,
  },
  {
    message: 'Aliquip deserunt occaecat eiusmod deserunt anim veniam. Ullamco labore ea commodo ut mollit mollit pariatur pariatur eu ex voluptate anim aliquip. Adipisicing laboris Lorem irure in et ad excepteur quis. Ipsum eu laboris nisi cupidatat. Adipisicing velit duis pariatur incididunt dolor velit officia.',
    author: 'Juan Dela Cruz',
    role: 'Moderator',
    date: '10/4/2024',
    likes: 27,
  },
  {
    message: 'Officia in anim voluptate ex fugiat dolore minim irure officia aliqua velit. Aliquip ullamco anim mollit aute labore quis deserunt Lorem occaecat adipisicing occaecat anim. Sint voluptate amet dolor reprehenderit dolor nostrud.',
    author: 'Juan Dela Cruz',
    role: 'Moderator',
    date: '10/01/2024',
    likes: 9,
  },
]

const resObject = require('../configs/response');

const getAnnouncements = async (req, res) => {
  try {
    setTimeout(function() {
      res.json(resObject(announcements, true));
    }, 3000);
  } catch (e) {
    res.json(resObject(null, false, 'Failed to fetch websites.'));
    console.log(e);
  }
}

module.exports = {
  getAnnouncements
}
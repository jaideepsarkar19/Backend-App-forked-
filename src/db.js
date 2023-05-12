const users = [
  { name: "Jana Shubina", login: "js", password: "qwerty" },
  { name: "Ilya Tikhonov", login: "it", password: "123" }
];

const posts = [
  { id: 1, user: "js", text: "Hi! I'm here" },
  { id: 2, user: "it", text: "This is my awesome post" },
  { id: 3, user: "js", text: "I started learning French" },
  { id: 4, user: "js", text: "My name is Jana" },
  { id: 5, user: "it", text: "Jana likes tea" }
];

module.exports = {
  checkAuth(login, password) {
    return this.getUser(login).password === password;
  },

  getUser(login) {
    return users.find((u) => u.login === login);
  },

  getUserPosts(user) {
    return posts.filter((u) => u.user === user);
  }
};

function SaveUser(username, password) {
  let users = GetData("users") || [];

  users.push({
    username: username,
    password: password,
  });

  SaveData("users", users);
}

function GetUser(username, password) {
  let users = GetData("users") || [];

  const user = users.find(
    (user) => user.username == username && user.password == password
  );

  return user
    ? (SaveData("LoggedUser", user), true)
    : (SaveData("LoggedUser", null), false);
}

// login as guest
function Guest() {
  user = {
    username: "guest",
    password: null,
  };
  SaveData("LoggedUser", user);
}
function GetLoggedUser() {
  return GetData("LoggedUser");
}

function LogoutUser() {
  SaveData("LoggedUser", null);
}

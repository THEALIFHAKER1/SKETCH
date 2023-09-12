function SaveCanvas(title, dataURL, username, Public) {
  let canvas = GetData("canvas") || [];

  if (canvas) {
    canvas.push({
      title: title,
      canvas: dataURL,
      username: username,
      Public: Public,
    });
    SaveData("canvas", canvas);
    alert("Canvas saved");
  } else {
    alert("Canvas not saved");
  }
}

// get public canvas

function GetPublicCanvas() {
  let canvas = GetData("canvas") || [];
  let publicCanvas = canvas.filter((item) => item.Public === true);
  return publicCanvas;
}

// get user canvas

function GetUserCanvas(username) {
  let canvas = GetData("canvas") || [];
  let userCanvas = canvas.filter((item) => item.username === username);
  return userCanvas;
}

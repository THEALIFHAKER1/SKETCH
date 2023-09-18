<<<<<<< HEAD
function SaveCanvas(title, dataURL, username, Public, date) {
  let canvas = GetData("canvas") || [];

  if (canvas) {
    canvas.push({
      title: title,
      canvas: dataURL,
      username: username,
      Public: Public,
      Date: date,
    });
    SaveData("canvas", canvas);
    alert("Canvas saved");
  } else {
    alert("Canvas not saved");
  }
}

//  save  edited canvas by replace canvas that has same date

function SaveEditedCanvas(title, dataURL, username, Public, date) {
  let canvas = GetData("canvas") || [];
  let newCanvas = canvas.filter((item) => item.Date !== date);
  newCanvas.push({
    title: title,
    canvas: dataURL,
    username: username,
    Public: Public,
    Date: date,
  });
  SaveData("canvas", newCanvas);
  alert("Canvas saved");
}

function DeleteCanvas(date) {
  let canvas = GetData("canvas") || [];
  let newCanvas = canvas.filter((item) => item.Date !== date);
  SaveData("canvas", newCanvas);
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
=======
function SaveCanvas(title, dataURL, username, Public, date) {
  let canvas = GetData("canvas") || [];

  if (canvas) {
    canvas.push({
      title: title,
      canvas: dataURL,
      username: username,
      Public: Public,
      Date: date,
    });
    SaveData("canvas", canvas);
    alert("Canvas saved");
  } else {
    alert("Canvas not saved");
  }
}

//  save  edited canvas by replace canvas that has same date

function SaveEditedCanvas(title, dataURL, username, Public, date) {
  let canvas = GetData("canvas") || [];
  let newCanvas = canvas.filter((item) => item.Date !== date);
  newCanvas.push({
    title: title,
    canvas: dataURL,
    username: username,
    Public: Public,
    Date: date,
  });
  SaveData("canvas", newCanvas);
  alert("Canvas saved");
}

function DeleteCanvas(date) {
  let canvas = GetData("canvas") || [];
  let newCanvas = canvas.filter((item) => item.Date !== date);
  SaveData("canvas", newCanvas);
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
>>>>>>> af08a86de74424245e250f85298036aebbbc9114

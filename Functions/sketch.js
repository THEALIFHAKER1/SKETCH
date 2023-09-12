function isInsideCanvas() {
  const canvas = canvaRef.current;
  return (
    event.clientX > canvas.offsetLeft &&
    event.clientX < canvas.offsetLeft + canvas.width &&
    event.clientY > canvas.offsetTop &&
    event.clientY < canvas.offsetTop + canvas.height
  );
}

function draw(event) {
  if (!isPainting || !ctx) {
    return;
  }

  ctx.lineWidth = lineWidthRef.current?.value || lineWidthRef.current;
  ctx.lineCap = "round";
  ctx.strokeStyle = colorRef.current?.value || colorRef.current;

  const xOffset = event.clientX - canvaRef.current.offsetLeft;
  const yOffset = event.clientY - canvaRef.current.offsetTop;

  ctx.lineTo(xOffset, yOffset);
  ctx.stroke();
}

function handleMouseDown(event) {
  setIsPainting(true);
  draw(event);
}

function handleMouseUp() {
  setIsPainting(false);
  if (ctx) {
    ctx.stroke();
    ctx.beginPath();
  }
}

function handleMouseMove(event) {
  if (isPainting) {
    draw(event);
  }
}

function handleTitleChange(event) {
  const sketchName = event.target.value;
  const title = "Sketch - " + sketchName;
  document.title = title;
}

function handleFileChange(event) {
  const file = event.target.files[0];
  const canvas = canvaRef.current;

  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const imgWidth = img.width;
          const imgHeight = img.height;

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
        }
      };
    };
    reader.readAsDataURL(file);
  }
}

function handlePublicChange(event) {
  isPublic.current = event.target.checked;
}

function saveDrawing(event) {
  event.preventDefault();
  const dataURL = canvaRef.current.toDataURL();
  console.log("dataURL", dataURL);
  const title = titleRef.current.value;
  console.log("title", title);
  const Public = isPublic.current;
  console.log("isPublic", Public);
  const username = user.username;
  console.log("username", username);

  SaveCanvas(title, dataURL, username, Public);
}

function reset() {
  const canvas = canvaRef.current;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  formRef.current.reset();
}

function SaveCanvas(canvas, public, username) {
    let canvasesPublic = GetData('canvases') || []; 
    let canvases = GetData('canvases') || [];

    if(public){
        canvasesPublic.push({
            canvas: canvas,
            });
        SaveData('canvases', canvasesPublic);
    }else{
        canvases.push({
            canvas: canvas,
            username: username
        });        
        SaveData('canvases', canvases);
    }
}

function GetPublicCanvases() {
    let canvases = GetData('canvases') || []; 

    const publicCanvases = canvases.filter(canvas => canvas.username == null);
    
    return publicCanvases;
}

function GetPrivateCanvases(username) {
    let canvases = GetData('canvases') || []; 

    const privateCanvases = canvases.filter(canvas => canvas.username == username);
    
    return privateCanvases;
}
function SaveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function GetData(key) {
    const data =  JSON.parse(localStorage.getItem(key));
    return data;
}
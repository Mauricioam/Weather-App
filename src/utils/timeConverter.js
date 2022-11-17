export function timeConverter(unixTime){
    let variable = new Date(unixTime * 1000);
    let hour = variable.getHours();
    let min = variable.getMinutes();
    let time = `${hour}:${min}`
    return time;

}

export function dateConverter(unixTime){
    let variable = new Date(unixTime * 1000);
    let date = variable.getDate();
    return date;
}


export function actualDate(){
    let variable = new Date();
    let date = variable.getDate();
    let month = variable.getMonth();
    let year = variable.getFullYear();
    let fullDate = ` ${date}/${month}/${year}`;
    return fullDate;
}
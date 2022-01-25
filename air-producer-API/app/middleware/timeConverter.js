const converter =(timestamp)=>{

    let date = new Date(timestamp);
    let result = date.getFullYear()+
    "-"+(date.getMonth()+1)+
    "-"+date.getDate()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds()
    return  result
}

module.exports =converter



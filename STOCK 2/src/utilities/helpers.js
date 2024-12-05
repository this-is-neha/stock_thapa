const generateRandomString=(length=100)=>{
    const chars="0123456789ABCDEFGHIJKLMNOPQRSTU VWXYZabcdefghijklmnopqrstuvwxyz"
    const len=chars.length;
    let random="";
    for(i=0;i<length;i++){
        const posn=Math.ceil(Math.random()*(len-1))
        random+=chars[posn]
    }
    return random
}

module.exports={
    generateRandomString
}
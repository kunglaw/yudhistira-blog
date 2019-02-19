export default { 
    wordLimiter : function(str,limit) {
        var strArr = str.split(" ")
        //console.log("strArr ==> ",str)
        var strSlice = strArr.slice(0,limit+1)
        var result = strSlice.join(" ")
        return result+" ..."
    } , 
    dateTime: function(date) {
        return date
    }
}
function fakeResponse(callback) {

    let timer = setTimeout(
        function(){
            callback('success')
        }

    ), 1000

        return timer;
}


///




let waitforresponse = fakeResponse(function(response){
    console.log('the server said '+ response)
})

clearTimeout(waitforresponse)
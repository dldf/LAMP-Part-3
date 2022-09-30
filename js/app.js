const body = document.querySelector("body")

/*
    Note:
    Wrap the AJAX in a Promise, 
    use .then for better HTML status code checks and feedback
*/

function getUser() {
    
    // PRODUCER -- This may take time (asynchronous)
    let promise = new Promise(
        (resolve, reject)=>{
            let xhr = new XMLHttpRequest()
            xhr.open("GET", "https://randomuser.me/api") // goof this for 404
            xhr.send()                              
            xhr.addEventListener("load", // AJAX callback
            () => {  
                if (xhr.status == 200) { // HTTP request successful
                    jsonData = JSON.parse(xhr.response)
                    resolve (jsonData)
                }
                else {
                    errCode = xhr.status
                    mdnCodes = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
                    reject (`Problem: <a href=${mdnCodes}>${errCode} Error</a>`)
                }
            }) // close AJAX
    }) // close Promise

    // CONSUMER -- Wait until the producer is finished (promise is resolved)
    promise.then(
        // when pending resolves to SUCCESS: first callback fn returned if promise resolves.
        (value) => {
            const userData = value // From producer: resolve (jsonData)

            const apiFirst = userData.results[0].name.first;
            const apiLast = userData.results[0].name.last;
            const apiCountry = userData.results[0].location.country;
            const apiTime = userData.results[0].location.timezone.offset;

            const htmlData = `
            <img  class="user" src=${userData.results[0].picture.large} alt="rando user">
            <h2 class="user">${apiFirst} ${apiLast}</h2>
            <p class="user">${apiFirst} lives in ${apiCountry} </p>
            <input type="hidden" name="apiFirst" value="${apiFirst}"/>
            `
            apiData.innerHTML = htmlData
            document.getElementById("addBtn").value = `Add ${apiFirst}`
        }, // comma to seperate the two callback parameters
        
        // when pending resolves to FAIL: 
        // second callback fn returned if promise is rejected
        (error) => {
            apiData.innerHTML = `<h2>${error}</h2>`
        }   
    ) // close .then
} // close getUser

getUser()
getBtn.addEventListener("click", getUser)
let requestURL = 'https://fakestoreapi.com/products'


function sendRequestXHR(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body));
    }
    )
}


function demo_sendXhrRequests() {

    sendRequestXHR('GET', requestURL).then(data => {
        console.log('first then');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    }).then(data => console.log(data)).catch(error => console.error(error))


    const p = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    sendRequestXHR('POST', requestURL, p).then(data => console.log(data)).catch(error => console.error(error))
}

function sendRequestFetch(method, url, body = null) {
    if (body == null) {
        obj = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    else {
        obj = {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
    return fetch(url, obj
    ).then(response => {
        if (response.ok) return response.json()
        throw new Error("Something went wrong!")
    })
}

function demo_sendFetchRequest() {
    sendRequestFetch('GET', requestURL, null).then(data => console.log(data)).catch(error => console.error(error))
    const p = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
    sendRequestFetch('POST', requestURL, p).then(data => console.log(data)).catch(error => console.error(error))
}

demo_sendFetchRequest()
demo_sendXhrRequests()
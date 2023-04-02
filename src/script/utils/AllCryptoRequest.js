class AllCryptoRequest {
    url = "https://noticiascriptoymas.com/api/crypto"
    //url = "http://localhost/api/crypto"

    getAll() {
        return new Promise((resolve, reject) => {
            fetch(this.url, {method : "POST"}).then((data) => {
                return data.json()
            }).then((dataJSON) => {
                resolve(dataJSON)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}

export default AllCryptoRequest
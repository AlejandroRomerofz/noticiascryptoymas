class CoinsRequest {

    token = "8a04021d-4ffb-457a-83fa-f16f8cdafff0"

    cryptoList = "https://api.livecoinwatch.com/coins/list"
    coinList = "https://api.livecoinwatch.com/fiats/all"

    headers = new Headers({
        "content-type": "application/json",
        "x-api-key": this.token,
    })

    getAllCrypto(limit = 50, compareCoin = "USD", offset = 0) {
        return fetch(this.cryptoList, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                currency: compareCoin,
                sort: "rank",
                order: "ascending",
                offset: offset,
                limit: limit,
                meta: true,
            })
        }).then((data) => {
            return data.json()
        })
    }

    getAllCoins() {
        return fetch(this.coinList, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({})
        }).then((data) => {
            return data.json()
        })
    }

    coinListPromise(resolve, reject) {
        
    }
}

export default CoinsRequest
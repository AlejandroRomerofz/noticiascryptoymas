class NewsRequest {
    URL = "http://80.29.46.216/api/news"

    getNews(limit = -1, from = 0) {
        const url = this.URL
        return new Promise((resolve, reject) => {
            fetch(url, {method : "POST", body : JSON.stringify({mode : 0, lang : "es"})}).then((data) => {
                return data.text()
            }).then((dataText) => {
                if (dataText == "Error") {
                    reject("Error parameters")
                }
                return new window.DOMParser().parseFromString(dataText, "text/xml").querySelectorAll("item")
            })
            .then((items) => {
                if (!items) {
                    reject("Error")
                }

                var results = []
                items.forEach((item) => {
                    results.push(this.parseJSON(item))
                })
                results = results.slice(from, from + limit)
                resolve(results)
            })
            .catch((e) => {
                reject(e)
            })
        })
    }

    parseJSON(element) {
        const json = {}
        json["title"] = element.querySelector("title").textContent
        var description = new window.DOMParser().parseFromString(element.querySelector("description").textContent, "text/html").querySelectorAll("p")
        json["description"] = description.length > 1 ? description[1].textContent : description[0].textContent
        json["image"] = element.querySelector("enclosure").getAttribute("url")
        json["date"] = element.querySelector("pubDate").textContent
        json["link"] = element.querySelector("link").textContent
        return json



    }

}

export default NewsRequest;
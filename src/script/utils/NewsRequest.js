class NewsRequest {
    URL = "http://80.29.46.216/api/news"

    modesTraduction = {
        "all" : 0,
        "altcoin" : 1,
        "bitcoin" : 2,
        "blockchain" : 3,
        "ethereum" : 4,
    }

    getNews(modes = ["all"], limit = -1, from = 0, getTotalNumber = false) {

        const m = []

        modes.forEach((mode) => {

            console.log(mode)
            if (this.modesTraduction[mode] == undefined) {
                return false
            }
            m.push(this.modesTraduction[mode])
        })

        console.log(m)
        
        const url = this.URL
        return new Promise((resolve, reject) => {
            fetch(url, {method : "POST", body : JSON.stringify({mode : m, lang : "es"})}).then((data) => {
                return data.json()
            }).then((dataJson) => {
                const results = dataJson.result
                var news = []
                if (!results) {
                    reject("Error parameters")
                    return false;
                }
                results.map((result) => {
                    news = news.concat(...new window.DOMParser().parseFromString(result, "text/xml").querySelectorAll("item"))
                })
                console.log(news)
                return news
            })
            .then((items) => {
                if (!items) {
                    reject("Error")
                }

                var results = []
                items.forEach((item) => {
                    results.push(this.parseJSON(item))
                })

                console.log(results)
                
                results.sort((a,b) => {
                    if (a.date.getTime() < b.date.getTime()) {
                        return 1
                    } else if (a.date.getTime() > b.date.getTime()) {
                        return -1
                    } else {
                        return 0
                    }
                })

                console.log(results)
                
                
                const result = results.slice(from, from + limit)

                if (getTotalNumber) {
                    resolve([result, results.length])

                } else {
                    resolve(result)
                }
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
        json["date"] = new Date(element.querySelector("pubDate").textContent)
        json["link"] = element.querySelector("link").textContent
        return json
    }

    createNewsElement(container, jsonData) {
        const newItem = document.createElement("a")
        newItem.classList.add("cont-new")
        newItem.target = "_blank"
        newItem.href = jsonData.link

        const imgItem = document.createElement("img")
        imgItem.classList.add("new-img")
        imgItem.src = jsonData.image
        newItem.appendChild(imgItem)

        const content = document.createElement("div")
        content.classList.add("content")

        const titleItem = document.createElement("p")
        titleItem.classList.add("title")
        titleItem.textContent = jsonData.title
        content.appendChild(titleItem)

        const descItem = document.createElement("p")
        descItem.classList.add("description")
        descItem.textContent = jsonData.description
        content.appendChild(descItem)

        newItem.appendChild(content)

        container.append(newItem)
    }

}

export default NewsRequest;
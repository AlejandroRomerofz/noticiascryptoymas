class LoadingIcon {

    container
    loadingContainer
    loadingIcon

    constructor(containerClassOrID) {
        this.container = document.querySelector(containerClassOrID)
        if (this.container) {
            this.loadingContainer = this.container.querySelector(".loading")
        } else {
            throw new Error("No existe el container")
        }

        if (!this.loadingContainer) {
            this.createLoading()
        } else {
            this.loadingIcon = this.loadingContainer.querySelector(".loading-icon")
            if (!this.loadingIcon) {
                this.createIcon()
            }
        }

        console.log(this.loadingContainer)
        console.log(this.loadingIcon) 
    }

    createLoading() {
        const loading = document.createElement("div")
        loading.classList.add("loading")

        const icon = document.createElement("i")
        icon.classList.add("loading-icon")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-circle-notch")
        icon.classList.add("fa-spin")

        loading.appendChild(icon)

        this.loadingContainer = loading
        this.container.appendChild(loading)
    }

    createIcon() {
        const icon = document.createElement("i")
        icon.classList.add("loading-icon")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-circle-notch")
        icon.classList.add("fa-spin")

        this.loadingContainer.appendChild(icon)
    }

    startLoading() {
        if (!this.loadingContainer.classList.contains("show")) {
            this.loadingContainer.classList.add("show")
        }
    }

    stopLoading() {
        if (this.loadingContainer.classList.contains("show")) {
            this.loadingContainer.classList.remove("show")
        }
    }
}

export default LoadingIcon
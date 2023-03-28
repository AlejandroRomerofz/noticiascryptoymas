class PaginationMenu {

    parentContainer
    container = document.createElement("div")
    pageNumber;
    onSelectedChange = () => {}

    constructor(parent, pageNumber) {
        this.parentContainer = parent
        this.pageNumber = pageNumber
        this.createLayout()
        this.setSelected(1)
    }

    setSelected(index) {
        const realIndex = index - 1
        const element = this.container.childNodes[realIndex]
        if (!element) {
            return false
        }
        const lastSelected = this.container.querySelector(".selected")


        if (lastSelected) {
            lastSelected.classList.remove("selected")
        }

        element.classList.add("selected")
        this.onSelectedChange(index)
    }

    setPageNumber(pn) {
        this.pageNumber = pn
        this.recreateLayout()    
    }

    createLayout() {
        this.container = document.createElement("div")
        this.container.classList.add("pagination-menu")

        for(var i = 1; i <= this.pageNumber; i++) {
            const page = document.createElement("p")
            page.textContent = i
            page.addEventListener("click", (e) => {
                this.setSelected(parseInt(e.target.textContent))
            })
            this.container.append(page)
        }

        this.parentContainer.append(this.container)
    }

    recreateLayout() {
        const number = this.container.childNodes.length

        for(var i = number + 1; i <= this.pageNumber; i++) {
            const page = document.createElement("p")
            page.textContent = i
            page.addEventListener("click", (e) => {
                this.setSelected(parseInt(e.target.textContent))
            })
            this.container.append(page)
        }
    }
}

export default PaginationMenu
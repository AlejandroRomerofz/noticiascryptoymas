export default class Header {

    header = document.querySelector("#main_header")
    headerSustitute = document.querySelector("#header_sustitute")
    topOfPage = document.querySelector("#top_of_page")
    options = document.querySelectorAll(".mh-nav-option")

    openMobileMenuButton = document.querySelector("#menu_open_button")
    mobileMenu = document.querySelector("#mobile_menu_container")
    blackScreen = document.querySelector("#black_screen")

    searchContainer = document.querySelector("#search_container")
    searchOpenButton = document.querySelector("#search_open_button")
    searchCloseButton = document.querySelector("#search_close_button")
    searchButton = document.querySelector("#search_button")

    

    init() {
        this.initMobileMenu()
        this.addHoverEventToOptions()
        this.createIntersectionObserver()
        this.createSearchEvents()
    }

    initMobileMenu() {
        this.blackScreen.addEventListener("click", () => {
            this.mobileMenuClose()
        })
        this.openMobileMenuButton.addEventListener("click", () => {
            this.mobileMenuOpen()
        })
    }

    mobileMenuOpen() {
        if (!this.mobileMenu.classList.contains("show")) {
            this.mobileMenu.classList.add("show")        
        }
        if (!this.blackScreen.classList.contains("show")) {
            this.blackScreen.classList.add("show")
        }
    }

    mobileMenuClose() {
        if (this.mobileMenu.classList.contains("show")) {
            this.mobileMenu.classList.remove("show")
        }
        if (this.blackScreen.classList.contains("show")) {
            this.blackScreen.classList.remove("show")
        }
    }

    addHoverEventToOptions() {
        this.options.forEach((option) => {
            option.addEventListener("mouseover", (e) => {
                this.showDropMenu(option)
            })
            option.addEventListener("mouseleave", (e) => {
                this.hideDropMenu(option)
            })
        })
    }

    hideDropMenu(option) {
        const dropMenu = option.querySelector(".mh-option-drop")
        if (dropMenu.classList.contains("show")) {
            dropMenu.classList.remove("show")
        }
    }

    showDropMenu(option) {
        const dropMenu = option.querySelector(".mh-option-drop")
        dropMenu.classList.add("show")  
    }

    createIntersectionObserver() {
        new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.convertToBigHeader()
                } else {
                    this.convertToSmallHeader()
                }
            })
        }).observe(this.topOfPage)
    }

    convertToSmallHeader() {
        if (!this.header.classList.contains("small")) {
            this.header.classList.add("small")
            this.headerSustitute.classList.add("show")
        }
    }

    convertToBigHeader() {
        if (this.header.classList.contains("small")) {
            this.header.classList.remove("small")
            this.headerSustitute.classList.remove("show")
        }
    }

    createSearchEvents() {
        this.searchOpenButton.addEventListener("click", () => {
            this.showSearchContainer()
        })
        this.searchCloseButton.addEventListener("click", () => {
            this.hideSearchContainer()
        })
    }

    showSearchContainer() {
        if (!this.searchContainer.classList.contains("show")) {
            this.searchContainer.classList.add("show")
        }
    }

    hideSearchContainer() {
        if (this.searchContainer.classList.contains("show")) {
            this.searchContainer.classList.remove("show")
        }
    }
}
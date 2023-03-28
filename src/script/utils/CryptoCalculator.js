class CryptoCalculator {

    coin = "USD"
    crypto = "BTC"
    mode = 0
    inputData

    fromOutput
    toOutput

    constructor(inputData, outputFromData, outputToData) {
        this.fromOutput = outputFromData
        this.toOutput = outputToData    
        this.calculate(1)

        inputData.addEventListener("keyup", (e) => {
            if (e.target.value == "") {
                this.calculate(0)
                return false
            }
            this.calculate(e.target.value)
        })

        this.inputData = inputData
    }

    setCoin(coin) {
        this.coin = coin
        this.inputData.value = ""
        this.calculate(0)
    }

    setCrypto(crypto) {
        this.crypto = crypto
        this.inputData.value = ""
        this.calculate(0)
    }

    setMode(mode) {
        if (mode == 0 || mode == 1) {
            this.mode = mode
        } else {
            this.mode = 0
        }
    }

    calculate(val) {
        if (this.mode == 0) {
            this.fromOutput.textContent = `${val} ${this.crypto}`
            this.toOutput.textContent = `${val} ${this.coin}`
        } else {
            this.fromOutput.textContent = `${val} ${this.coin}`
            this.toOutput.textContent = `${val} ${this.crypto}`
        }
    }


}

export default CryptoCalculator
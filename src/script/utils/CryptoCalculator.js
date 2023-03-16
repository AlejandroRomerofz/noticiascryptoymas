class CryptoCalculator {

    coin = "USD"
    crypto = "BTC"
    mode = 0

    fromOutput
    toOutput

    constructor(inputData, outputFromData, outputToData) {
        this.fromOutput = outputFromData
        this.toOutput = outputToData    
        this.calculate(1)

        inputData.addEventListener("keydown", (e) => {
            if (isNaN(e.target.value)) {
                e.target.value = 0
            }
            this.calculate(e.target.value)
        })
    }

    setCoin(coin) {
        this.coin = coin
    }

    setCrypto(crypto) {
        this.crypto = crypto
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
        } else {

        }
    }


}

export default CryptoCalculator
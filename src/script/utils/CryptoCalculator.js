class CryptoCalculator {

    coin = "USD"
    crypto = "BTC"
    mode = 0
    inputData
    convertor;

    fromOutput
    toOutput

    constructor(inputData, outputFromData, outputToData, convertor) {
        this.fromOutput = outputFromData
        this.toOutput = outputToData    
        this.convertor = convertor

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

    switchMode() {
        if (this.mode == 0) {
            this.mode = 1
        } else {
            this.mode = 0
        }
        this.calculate(0)
    }

    calculate(val) {
        var convertFunction = () => {}
        if (this.mode == 0) {
           Object.entries(this.convertor).map((entry) => {
                if (entry[0] == this.crypto) {
                    convertFunction = entry[1][this.coin]
                }
           })
            this.fromOutput.textContent = `${val.toLocaleString("es-ES")} ${this.crypto}`
            this.toOutput.textContent = `${convertFunction(val) > 0 ? parseFloat(convertFunction(val).toFixed(2)).toLocaleString("es-ES") : 0} ${this.coin}`
        } else {
            Object.entries(this.convertor).map((entry) => {
                if (entry[0] == this.coin) {
                    convertFunction = entry[1][this.crypto]
                }
           })
            this.fromOutput.textContent = `${val.toLocaleString("es-ES")} ${this.coin}`
            this.toOutput.textContent = `${convertFunction(val) > 0 ?  parseFloat(convertFunction(val).toFixed(2)).toLocaleString("es-ES") : 0} ${this.crypto}`
        }
    }


}

export default CryptoCalculator
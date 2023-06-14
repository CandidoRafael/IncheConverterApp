let inputCentimeter = document.querySelector("#centimeter") as HTMLInputElement
let inputInches = document.querySelector("#inches") as HTMLInputElement

type FnListener = (this: HTMLInputElement, e: Event) => void


const convertToCm: FnListener = function(e) {
    inputCentimeter.value = (calculateCm(parseFloat(this.value))).toString()
}

const convertToInches: FnListener = function(e) {
    inputInches.value = (calculateInches(parseFloat(this.value))).toString()
}

inputInches.addEventListener("input", convertToCm)
inputCentimeter.addEventListener("input", convertToInches)

function calculateCm(inche: number) :number {
    return inche * 2.54
}

function calculateInches(cm: number){
    return cm * 0.393701
}


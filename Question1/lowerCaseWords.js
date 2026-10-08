const mixedArray = ['Pizza', 10, true, 25, false, 'wings']

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input should be an array!")
            return
        }
        const FilterWords = mixedArray.filter((value) => typeof value ==="string")
        const ChangeWords = FilterWords.map((value) => value.toLowerCase())
        resolve(ChangeWords)
    })
}

lowerCaseWords(mixedArray).then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
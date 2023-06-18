function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
}

/**
 * Get acronyms from text
 * @see https://github.com/tvarovski/PaperReader/blob/main/PaperReader/content.js
 * @param {text} text 
 * @returns {Array} acronyms
 */
function getAcronyms(text) {
    let re = new RegExp(/\([^\s\d\(\)]{2,10}\)/, "g") // From PaperReader chromium extension
    let brackets = text.match(re).filter(onlyUnique)

    let acronyms = brackets.map(
        (bracket) => bracket.replace(/\(|\)/g, "")
    ).filter(
        // Filter out undefined
        term => typeof term !== 'undefined'
    ).filter(
        // Filter out terms with only lowercase letters
        term => /[A-Z]/.test(term)
    )
    return acronyms
}

export default getAcronyms
var locale = navigator.language;

export function getLanguage() {
    return (
        locale
   )
}

export function setLanguage(value) {
    locale = value
    console.log(locale)
}

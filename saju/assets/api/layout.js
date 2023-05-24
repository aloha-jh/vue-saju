import { instance } from './index'

function fetchHeader() {
    return instance.get(`header`)
}
function headerAside() {
    return instance.get(`headerAside`)
}
function headerSearch() {
    return instance.get(`headerSearch`)
}
function fetchFooter() {
    return instance.get(`footer`)
}

export { fetchHeader, headerAside, headerSearch, fetchFooter }

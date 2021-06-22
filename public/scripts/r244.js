const urlParams = new URLSearchParams(window.location.search)
if (urlParams.get('rp') === '1') {
    const r244elements = document.getElementsByClassName('rp-hated')
    for (let i = 0; i < r244elements.length; i++) {
        r244elements[i].style.display = 'none'
    }
}
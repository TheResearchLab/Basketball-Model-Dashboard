export default class View {
    render() {
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup)
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }
}
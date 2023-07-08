

export default class View {
    render() {
        this._generateMarkup();
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }
}
class CodeService {
    list() {
        return localStorage.getItem('codes') ? JSON.parse(localStorage.getItem('codes')) : []
    }
    add(code) {
        return localStorage.setItem("codes",
            JSON.stringify([...this.list(), code])
        )
    }
}

export default new CodeService();
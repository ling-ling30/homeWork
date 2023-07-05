class Database {
    static get (key){
        return JSON.parse(localStorage.getItem(key))
    }
    static set (key, value){
        const oldData = Database.get(key)
        const dataArray = oldData ?? []
        let data = [...dataArray , value]
        let jsonString = JSON.stringify(data)
        localStorage.setItem(key, jsonString)        
    }
}


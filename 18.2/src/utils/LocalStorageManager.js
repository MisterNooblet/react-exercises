const LSM = {
    init() {
        const data = this.pull('todos')
        return !data ? this.push('todos', []) : null
    },
    push(item, data) {
        localStorage.setItem(item, JSON.stringify(data))
    },
    pull(item) {
        return JSON.parse(localStorage.getItem(item))
    },
    removeTask(id) {
        const currentData = this.pull('todos')
        const updatedData = currentData.filter(task => task.id !== id)
        this.push('todos', updatedData)
        return updatedData
    },
    addTask(data) {
        const currentData = this.pull('todos')
        if (data.length === 0) {
            this.push('todos', [data])
        } else {
            this.push('todos', [...currentData, data])
        }
        return [...currentData, data]
    },
    updateTask(id) {
        const currentData = this.pull('todos')
        const updatedData = currentData.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            } else {
                return task
            }
        })
        this.push('todos', updatedData)
    },


}
export default LSM
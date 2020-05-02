require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5eac659b3bb6bb0cec0e6265').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id, completed)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount('5eac65843a50a70cdfa11624').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
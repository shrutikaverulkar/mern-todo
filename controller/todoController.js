const TODO = require("./../models/Todo")
exports.addTod = async (req, res) => {
    try {
        const result = await TODO.create(req.body)
        res.json({
            Message: "add todo success",
            result
        })
    } catch (error) {
        res.json({
            Message: "something went wrong" + error,
        })
    }
}

exports.getTodos = async (req, res) => {
    try {
        const result = await TODO.find()
        // const result = await TODO.find()   //get all records
        // const result = await TODO.create()   //add to db
        // const result = await TODO.findByIdAndUpdate()   //update
        // const result = await TODO.findBy IdandDelete() ///delete
        res.json({
            Message: "get todos success",
            result
        })
    } catch (error) {
        res.json({
            Message: "something went wrong" + error,
        })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        // const result = await TODO.find()
        // const result = await TODO.find()   //get all records
        // const result = await TODO.create()   //add to db
        const todoId = req.params.id
        const result = await TODO.findByIdAndUpdate(todoId, req.body, { new: true })   //update
        // const result = await TODO.findBy IdandDelete() ///delete
        res.json({
            Message: "upadte todos success",
            result
        })
    } catch (error) {
        res.json({
            Message: "something went wrong" + error,
        })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        // const result = await TODO.find()
        // const result = await TODO.find()   //get all records
        // const result = await TODO.create()   //add to db
        const todoId = req.params.id
        // const result = await TODO.findByIdAndUpdate(todoId,req.body)   //update
        const result = await TODO.findByIdAndDelete(todoId) ///delete
        res.json({
            Message: "detele todos success",
            result
        })
    } catch (error) {
        res.json({
            Message: "something went wrong" + error,
        })
    }
}
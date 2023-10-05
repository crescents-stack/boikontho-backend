exports.GetAllUsers = async (req, res) => {
    try {
        res.status(200).send({
            message: "All Users Route Check!"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal server error!"
        })
    }
}
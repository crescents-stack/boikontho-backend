exports.GetAllBooks = async (req, res) => {
    try {
        res.status(200).send({
            message: "All Book Route Check!"
        })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error!"
        })
    }
}
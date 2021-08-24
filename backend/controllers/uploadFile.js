async function uploadFile(res, req) {

    var idUser = req.body.idUser;
    var files = []
    Object.keys(req.files).map(ele => files = [...files, req.files[ele]])

    try {
        await files.map(async (ele, index) => {
            await ele.mv("./assets/" + ele.name);
            res.send({
                err: false,
                path: "http://localhost:3001/assets/" + ele.name
            });
        })
    } catch (err) {
        res.send({
            message: err.message.sqlMessage,
            error: true
        })
    }
};

module.exports = uploadFile;
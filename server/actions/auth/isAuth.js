module.exports = async (req, res) => {
    const session = req.session?.isAuth;

    //FIXME MELHORAR CODIGO
    if (session === undefined) {
        return res.status(203).json({ status: 'ok', isAuth: false });
    }
    return res.status(202).json({ status: 'ok', isAuth: session })
}
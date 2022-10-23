const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]

    if (!token) {
        return res.status(403).send({ message: "No token provided!" })
    }

    const secret = process.env.JWT_SECRET
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" })
        }
        req.userId = decoded.id
        next()
    })
}

module.exports = {
    verifyToken,
}

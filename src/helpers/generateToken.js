import jwt from 'jsonwebtoken'
import config from '../config'

export const tokenSign = async(user) => {
   
    return jwt.sign(
        {
            _id: user.ID,
            role: user.rol
        },
        config.clavetoken,
        {
            expiresIn: "2h",
        }
    )
}

export const verifyToken = async(token) =>{
    try {
        return jwt.verify(token,config.clavetoken)
    } catch (error) {
        return null
    }
}

export const decodeSign = (token) => {}


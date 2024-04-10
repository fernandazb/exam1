const user = require('../models/userModel.js');

const register = async (req, res) => {
    const { name, phone, email, birthdate, gender} = req.body;
    try {
        const newUser = new user({
            name,
            phone,
            email,
            birthdate,
            gender
        })
        const userSaved = await newUser.save();
        res.json(
            {
                id: userSaved._id,
                name: userSaved.name,
                email: userSaved.email
            }
        )
        res.send('Usuario registrado');
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
    res.send('Register');
}
const showAll = async (req, res) => {
    try {
        const userFound = await user.find();
        res.json(userFound)
    }
    catch (error) {
        res.status(500).json({message: error.message});

    }
}
const showOne = async (req, res) => {
    const userFind = await user.findById(req.params.id)
    if(!userFind)
    {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    else
    {
        res.json(userFind);
    }
}
const updateOne = async (req, res) => 
{
    const userDelete = await user.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!userDelete)
    {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    else
    {
        res.json(userDelete);
    }
}

const deleteOne = async (req, res) => {
    const userDelete = await user.findByIdAndDelete(req.params.id)
    if(!userDelete)
    {
        return res.status(404).json({message: 'Usuario no encontrado'});
    }
    else
    {
        return res.sendStatus(204);
    }
}


module.exports = { register, showAll , showOne, updateOne, deleteOne}; 
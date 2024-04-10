const  { z } = require('zod');

const userValidate = z.object({  
    name: z.string({ 
        required_error: 'El nombre de usuario es requerido' }),
    phone: z.number({ 
        required_error: 'El telefono del usuario es requerido' }),
    email: z.string({ 
        required_error: 'El email del usuario es requerido' })
        .email({ 
            message: 'El email no es valido' }),
})

module.exports = userValidate ;
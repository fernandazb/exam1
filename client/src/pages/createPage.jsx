import { useForm } from 'react-hook-form'
import { registerUser } from '../api/route';

function createPage() {

     const { register, handleSubmit} = useForm();    

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl text-white mb-4">Crear Usuario</h1>
        <form 
        onSubmit={ handleSubmit(async (values) => {
            console.log(values);
            const res= await registerUser(values)
              console.log(res)
        })}
        
        >

            <input type="text" {... register('name', { required:true})}

                className="w-full p-2 bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder='Name'
            />
            <input type="tel"{... register('phone', { required:true})}
                className="w-full p-2 bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder='Number'
            />
            <input type="email" {... register('email', { required:true})}
                 className="w-full p-2 bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                 placeholder='Email'
            />
            <input type="date" {... register('birthdate', { required:true})}
                className="w-full p-2 bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder='birthdate'/>
            <input type="text" {... register('gender', { required:true})}
                className="w-full p-2 bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder='gender'   
            />
                
            <button type="submit" className=''>
                Create
            </button>
        </form>
        </div>
    
    </div>
  );
}

export default createPage
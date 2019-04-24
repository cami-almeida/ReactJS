'use strict'

const User = use('App/Models/User')

class UserController {
    async create ( { request }) {
        const data = request.only (["username", "email", "password"])
        const user = await User.create(data)

        return user
    }

    async index (){
        const user = await User.all() 

        return user

    }

    async show ({ params , response}){
        const user = await User.findOrFail(params.id)

        return response.json(user)
    }

    async delete ({params, response}){
        const user = await User.find(params.id)

        if(!user){
            return response.status(404).json({data: 'Não encontrado'})
        }
        await user.delete()
        
        return response.status(204).json(null)
    }
    async update ({ params, request, response }){

        const infouser = request.only(['username', 'email', 'password'])

        const user = await User.find(params.id)

        if(!user){
            return response.status(404).json({data: 'Não encontrado'})
        }
        user.username = infouser.username
        user.email = infouser.email
        user.password = infouser.password

        await user.save()

        return response.status(200).json(user)
    }
}

module.exports = UserController

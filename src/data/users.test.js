const {addUser, getUsers, findUserByUid, updateUserByUid} = require('./users')
const {buildUser} =require('../__fixtures__/users')

test('Debería agregar un nuevo usuario',() =>{
    const user = buildUser()
    addUser(user)
    expect(getUsers()).toEqual([user])
})

test('Debería devolver undefined cuando no hay usuarios',() =>{
    const user = findUserByUid({uid:''})
    expect(user).toBe(undefined)
})

test('Debería devolver un usuario valido',() =>{
    const user = buildUser()
    const userFound = findUserByUid({uid: user.uid})
    expect(user).toBe(user)
})

test('Debería actualizar un usuario valido',() =>{
    const user = buildUser()
    const userUpdated = {...user, name:'updated'}
    const usersUpdated = updateUserByUid(userUpdated)
    expect(usersUpdated).toEqual([userUpdated])
})
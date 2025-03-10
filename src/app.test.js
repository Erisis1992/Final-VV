const request = require('supertest');
const app=require("./app")
const {getUsers, addUser, updateUserByUid, findUserByUid, removeUserByUid}= require('./data/users')
const {buildUser}= require('./__fixtures__/users')
jest.mock('./data/users')
beforeEach(()=>{
    getUsers.mockReset()
    addUser.mockReset()
    updateUserByUid.mockReset()
    findUserByUid.mockReset()
    removeUserByUid.mockReset()
})
describe('users', () =>{
  test('Deberia contener un usuario', async () =>{
    const result= await request(app)
    .post('/users')
    .send({name: 'john', age:'20', adress: 'fake adress', uid:"1"})
    .set('Accept','application/json')
    .expect(201)

    expect(result.body).toEqual({message:'success'})
  })
  test('Deberia devolver todos los usuarios', async () =>{
    const user = buildUser()
    getUsers.mockReturnValue([user])
    const result= await request(app)
    .get('/users')
    .expect(200)
    expect(result.body).toEqual([user])
  })

  test('Deberia devolver usuarios vacios cuando no hay usuarios', async () =>{
    getUsers.mockReturnValue([])
    const result= await request(app)
    .get('/users')
    .expect(200)
    expect(result.body).toEqual([])
  })

  test('Deberia actualizar un usuario', async () =>{
    const user = buildUser()
    updateUserByUid.mockReturnValue([user])
    const result= await request(app)
    .put(`/users/${user.uid}`)
    .send(user)
    .set('Accept','application/json')
    .expect(200)

    expect(result.body).toEqual([user])
  })

  test('Deberia devolver un usuario por uid', async () =>{
    const user = buildUser()
    findUserByUid.mockReturnValue(user)
    const result= await request(app)
    .get(`/users/${user.uid}`)
    .expect(200)
    expect(result.body).toEqual(user)
  })

  test('Deberia eliminar un usuario por uid', async () =>{
    const user = buildUser()
    removeUserByUid.mockReturnValue([])
    const result= await request(app)
    .delete(`/users/${user.uid}`)
    .expect(200)
    expect(result.body).toEqual([])
  })
})



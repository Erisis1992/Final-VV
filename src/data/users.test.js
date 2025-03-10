const {addUser, getUsers, findUserByUid, updateUserByUid} = require('./users')
const {buildUser} =require('../__fixtures__/users')

test('Debería agregar un nuevo usuario', async () => {
    const user = buildUser();
    await addUser(user);
    const users = await getUsers();
    expect(users).toEqual([user]);
});

test('Debería devolver undefined cuando no hay usuarios', async () => {
    const user = await findUserByUid({ uid: '' });
    expect(user).toBe(undefined);
});

test('Debería devolver un usuario válido', async () => {
    const user = buildUser();
    await addUser(user);
    const userFound = await findUserByUid({ uid: user.uid });
    expect(userFound).toEqual(user);
});

test('Debería actualizar un usuario válido', async () => {
    const user = buildUser();
    await addUser(user);
    const userUpdated = { ...user, name: 'updated' };
    const usersUpdated = await updateUserByUid(userUpdated);
    expect(usersUpdated).toContainEqual(userUpdated);
});
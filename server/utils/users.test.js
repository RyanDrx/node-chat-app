const expect = require('expect');
const { Users } = require(`./users`);

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node rocks'
        }, {
            id: '2',
            name: 'Bob',
            room: 'React rocks'
        },
        {
            id: '3',
            name: 'Talia',
            room: 'Node rocks'
        }];

    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Ryan',
            room: 'GOT fans'
        }

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node rocks room ', () => {
        var userList = users.getUserList('Node rocks');
        expect(userList).toEqual(['Mike', 'Talia']);
    });

    it('should return names for react rocks room ', () => {
        var userList = users.getUserList('React rocks');
        expect(userList).toEqual(['Bob']);
    });

    it('should remove a user ', () => {
        var userId = '2';
        var user = users.removeUser('2');
        expect(user.id).toEqual(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user ', () => {
        var userId = '109238';
        var user = users.removeUser('109238');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user by id', () => {
        var userId = '1';
        var gotUser = users.getUser('1');
        expect(gotUser.id).toEqual(userId);
    });

    it('should not find a user with invalid id', () => {
        var userId = '2341';
        var gotUser = users.getUser('2341');
        expect(gotUser).toNotExist();
    });
});

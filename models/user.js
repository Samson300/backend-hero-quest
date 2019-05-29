const db = require('./conn');

class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }


    static add(userData) {
        return db.one(`
            insert into users
                (first_name, last_name, email, password)
            values
                ($1, $2, $3, $4)
            returning id, first_name, last_name
        `, [userData.first_name, userData.last_name, userData.email, userData.password])
        .then((data) => {
            console.log(data);
            return data.id
        })
    }

    
    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    }
}
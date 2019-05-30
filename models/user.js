const db = require('./conn');
const bcrypt = require("bcryptjs");
const escapeHtml = require("../utils");

class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;
    }


    static add(userData) {
        const firstName = ''; //escapeHtml(userData.first_name);
        const lastName = ''; //escapeHtml(userData.last_name);
        const email = escapeHtml(userData.email);
        const aPassword = escapeHtml(userData.password);
        const hashed = User.hashPass(aPassword);
        return db.one(`
            insert into users
                (first_name, last_name, email, password)
            values
                ($1, $2, $3, $4)
            returning id, first_name, last_name
        `, [firstName, lastName, email, hashed])
        .then((data) => {
            return data.id
        })
    }

    
    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    }

    // returns Promise
    static getById(id) {
        return db.one(`select * from users where id=$1`, [id])
            .then((userData) => {
                const userInstance = new User(
                    userData.id,
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.password
                    );
                return userInstance;
            })
            .catch(() => {
                return null;
            })
    }


    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    static hashPass(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        return hash;
    }


    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    }

    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
        .then(userData => {
            const aUser = new User(
                userData.id,
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.password
            );
            return aUser;
        });
    }

    static checkEmail(email) {
        const aEmail = escapeHtml(email);
        return db.one(`select email from users where email=$1`, [aEmail])
            .catch(() => {
                return null;
            });
    }

    save() {
        return db.result(
            `update users set first_name='${this.first_name}', last_name='${this.last_name}', 
            email='${this.email}', password='${this.password}' where id=${this.id}`
        );
    }
}
module.exports=User;
import {
    observable, action
} from 'mobx'

export class user {
    // 利用
    @observable age = 0
    @observable name = ''

    @action setName (name: string) {
        this.name = name
    }

    @action setAge (age: number) {
        this.age = age
    }
}
export default new user()

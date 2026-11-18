import { defineStore } from 'pinia'
import {NAMES} from './enum.ts'

interface User {
    name: string,
    age: number
}

const login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(()=>resolve({name: '随风的叶子', age: 25}), 2000)
    })
}

interface State {
    current: number,
    name: string,
    user: User|null,
}

export const useTestStore = defineStore(NAMES.TEST,{
    state(): State {
        return {
            current: 11,
            name: '小林11',
            user: null,
        }
    },
    // computed修饰的属性
    getters: {
        userName(): string {
            if (!this.user) {
                return '(<user>null)'
            }
            return this.user.name
        }
    },
    // 同步异步都可以
    actions: {
        setName(newName: string) {
            this.name = newName
        },
        setCurrent(newCurrent: number) {
            this.current = newCurrent
        },
        async setUser() {
            const user = await login()
            this.setName(user.name)
            this.user = user
        },
    },
})
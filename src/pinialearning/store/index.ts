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

interface TestState {
    current: number,
    name: string,
    user: User|null,
}

interface BaseState {
    name: string,
    age: number
}

export const useTestStore = defineStore(NAMES.TEST,{
    state(): TestState {
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

export const useBaseStore = defineStore(NAMES.BASE, {
    state(): BaseState {
        return {
            name: '1',
            age: 10,
        }
    }
})
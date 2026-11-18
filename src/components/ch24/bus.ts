type BusClass<T> = {
    emit: (name: T) => void
    on: (name: T, callback: Function) => void
}

type BusParams = string | number | symbol

type List = {
    [key: BusParams]: Array<Function>
}

class Bus<T extends BusParams> implements BusClass<T>{
    list: List

    constructor() {
        this.list = {}
    }

    // 发布
    emit(name: T, ...args: Array<any>) {
        let events = this.list[name] || []
        events.forEach(event => event.apply(this, args))
    }

    // 订阅
    on(name: T, event: Function) {
        let events = this.list[name] || []
        events.push(event)
        this.list[name] = events
    }
}

// 单例模式
export default new Bus<string>()

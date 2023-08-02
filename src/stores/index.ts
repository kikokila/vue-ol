import { defineStore } from "pinia";

export const useTestStore = defineStore('test', {
    state: () => {
        return {
            current: 1,
            name: '测试'
        }
    },
    getters: {

    },
    actions: {
        setCurrent() {
            this.current++
        }
    }
})
import { create } from 'zustand'


type Store = {
    token: string;
    setToken: (token: string) => void;
    removeToken: () => void;
    user:any;
    setUser: (token: any) => void;
    removeUser: () => void;
}


const useStore = create<Store>((set) => ({
    token: "",
    setToken: (newToken: string) => set(() => ({ token: newToken })),
    removeToken: () => set({ token: "" }),
    user: {},
    setUser:(UserData: any) => set(() => ({ user:UserData })),
    removeUser: () => set(() => ({ user: {} })),

}))


export default useStore
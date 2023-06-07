export default {
    getLocalStorage: <T>(name: string): T | T[] => {
        if(localStorage.getItem(name)){
            const rawData = localStorage.getItem(name) as string;
            const res: T = JSON.parse(rawData)
            return res;
        }else {
            return []
        }
    },
    setLocalStorage: <T>(name: string, element: T): void => {
        if(localStorage.getItem(name)){
            localStorage.setItem(name, JSON.stringify(element));
        }else{
            const pushData = element;
            localStorage.setItem(name, JSON.stringify(pushData));
        }
    }
}
export class Memory {


    static setItem(key,value) {
            localStorage.setItem(key,value)
    }
    static getItem(key) {

        try {
            if(localStorage==undefined){
                return null;
            }
        }catch (e) {
            return null
        }

           return  localStorage.getItem(key)
    }


    static setItemInfo(key,testObject) {
        localStorage.setItem(key, JSON.stringify(testObject));
    }
    static getItemInfo(key) {

        try {
            if(localStorage==undefined){
                return null;
            }
            var retrievedObject = localStorage.getItem(key);
            return  JSON.parse(retrievedObject)
        }catch (e) {
            return null
        }
    }


    static clear() {
        localStorage.setItem('isloggedin', false);
        localStorage.setItem('managertype', undefined);
        localStorage.setItem('userInfo', undefined);
        localStorage.setItem('firstName', undefined);
        localStorage.setItem('token', undefined);
        localStorage.clear()
        sessionStorage.clear()
    }




}

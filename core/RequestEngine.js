import axios from "axios";
import Constants from "./Constants";
import {Memory} from "./Memory";

 class RequestEngine {
    constructor() {
        let token = Memory.getItem('token');
        let lang = Memory.getItem("lang")
        if(!lang){
            lang = "en";
        }
        this.apiEngine = axios.create({
            baseURL: Constants.serverlink,
            timeout: Constants.timeout,
            headers: {
                'Content-Type': 'application/json',
                'token':token,
                'lang':lang,
            }
        });
       // this.debugit();
    }






    debugit(){
        this.apiEngine.interceptors.request.use(request => {
            console.log('Starting Request', request);
            return request
        });

        this.apiEngine.interceptors.response.use(response => {
            console.log('Response:', response);
            return response
        })
    }




      addHeader(key,value) {
          axios.defaults.headers.common[key] = value
     }
       async login(username,password) {
         const link = '/api/admin/login';
         const data = {username :username,password:password}
         console.warn(link);

         return await this.apiEngine.post(link,data);
     }

     async postItemData(path,formData,action = "save") {
         const link = '/api/'+path+'/'+action;
         const config = {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         };
         return await  this.apiEngine.post(link,formData,config)
     }
     async postItem(path,data,action = "save") {
         const link = '/api/'+path+'/'+action;
         console.warn(link);
         return await this.apiEngine.post(link,data);
     }

     async getItem(path,param = "/list") {
         const link = '/api/'+path+param;
        // console.warn(link);
         return await this.apiEngine.get(link)
     }

     async getLocalItem(path,param = "/list") {
         const link = 'http://localhost:3001/api/'+path+param;
         // console.warn(link);
         return await this.apiEngine.get(link)
     }



}

export default RequestEngine;

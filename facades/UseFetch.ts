import { Fetch } from "./Fetch";

/*
  Use Fetch class
 */
export class UseFetch {
    fetch:Fetch

    constructor() {
        this.fetch=new Fetch()
    }
    // Query for resources or data that we need prior to populating the list
   useFetch(url:string,option?:any){
       return  this.fetch.fetch(url,option)
    }

}

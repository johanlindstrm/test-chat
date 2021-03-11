/*
@useFetch()
implement IFetch to use fetch
 */
export class Fetch implements IFetch{
    fetch(url: string, option?: any): any {
        return fetch(url,option)
    }
}

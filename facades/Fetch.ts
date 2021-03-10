/*
@useQuery()
implement IGraph to use query
 */
export class Fetch implements IGraph{

    fetch(url: string, option?: any): any {
        return fetch(url,option)
    }
}

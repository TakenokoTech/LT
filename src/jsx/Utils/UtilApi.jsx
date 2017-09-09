import request from "superagent"

class UtilApi {

    constructor() {
        this.getRss = this.getRss.bind(this);
    }
    
    getRss() {
        return new Promise((resolve) => {
            // const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'https%3A%2F%2Fnews.google.com%2Fnews%3Fned%3Dus%26hl%3Dja%26output%3Drss'&diagnostics=true"
            const url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'http%3A%2F%2Ffeeds.japan.cnet.com%2Frss%2Fcnet%2Fall.rdf'&format=json&diagnostics=true&callback="
            request.get(url)
                .accept('json')
                .buffer()
                .end((err = {}, res = {}) => {
                    resolve(res.body)
                });
        })
    }
    
}

export default new UtilApi()
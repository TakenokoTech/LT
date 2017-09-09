import UtilApi from '../Utils/UtilApi'

export default class Model {

    constructor() {
        this.getItem = this.getItem.bind(this)
    }

    getItem() {
        return new Promise (resolve => {
            UtilApi.getRss().then( res => {
                console.log(res['query']['results'])
                let items = [];
                for(let k in res['query']['results']['item']) {
                    const v = res['query']['results']['item'][k]
                    const dom = new DOMParser().parseFromString(v.description , "application/xml")
                    const img = dom.getElementsByTagName('img') || {}
                    const p = dom.getElementsByTagName('p') || {}
                    const src = img[0] && img[0].getAttribute("src") || ""
                    const typography = p[0] && p[0].childNodes && p[0].childNodes[1] || {}
                    if(!src || !typography) continue;
                    items.push({
                        title: v.title,
                        timestamp: v.date,
                        typography: typography.data || "",
                        image: src
                    });
                }
                resolve(items)
            });
        })
    }
}

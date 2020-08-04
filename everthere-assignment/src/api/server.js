import { Server, Model } from 'miragejs'
import tls from './mock/thoughtLeadersMock';

export function makeServer({ environment = "development" } = {}) {
    // Instantiate new server
    let server = new Server({
        environment,
        models: {
            thoughLeaders: Model,
        },

        seeds(server) {
            server.db.loadData({
                thoughtLeaders: tls,
            })
        },
        routes() {

            this.namespace = "api"

            this.get("/thought-leaders", schema => {
                return schema.db.thoughtLeaders
            })

        },
    })

    return server
}
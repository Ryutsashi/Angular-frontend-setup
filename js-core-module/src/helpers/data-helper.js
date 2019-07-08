const DataHelper = {
    serversByCountry : (servers) => {

        let map = {};

        servers.forEach(server => {
            map[server.country] = map[server.country] || [];
            map[server.country].push(server);
        });

        return map;
    }
}

export { DataHelper };
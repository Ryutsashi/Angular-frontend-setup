const DataHelper = {
    serversByCountry : (servers) => {

        let map = {};

        servers.forEach(server => {

            let country = server.country;

            if (!country || country == '') {
                country = 'unknown';
                console.warn('Unknown server country.');
            }

            map[country] = map[country] || [];
            map[country].push(server);
        });

        return map;
    }
}

export { DataHelper };
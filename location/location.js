const ipInfo = require("ipinfo");

async function getUbication() {
    ipInfo(async (err, cLoc) => {
        if (err) {
            console.error(err);
            return;
        }

        let coords = cLoc.loc.split(/\s*,\s*/);
        console.log(coords); 
        let googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${coords[0]},${coords[1]}`;
        console.log(googleMapsURL);

        try {
            // Dynamically import the 'open' module
            const open = (await import('open')).default;
            await open(googleMapsURL);
        } catch (e) {
            console.error(e);
        }
    });
}

getUbication();

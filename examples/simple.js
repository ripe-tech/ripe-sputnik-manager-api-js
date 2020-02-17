const ripeSputnikManagerApi = require("..");

async function run() {
    await ripeSputnikManagerApi.API.load();
    const api = new ripeSputnikManagerApi.API();
    try {
        console.log(await api.listJobs());
        console.log(await api.listPresets());
        console.log(await api.listDevices());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();

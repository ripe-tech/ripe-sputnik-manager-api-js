export const DeviceAPI = superclass =>
    class extends superclass {
        async listDevices() {
            const url = this.baseUrl + "devices";
            const contents = await this.get(url);
            return contents;
        }

        async getDevice(id) {
            const url = this.baseUrl + `devices/${id}`;
            const contents = await this.get(url);
            return contents;
        }

        async getDeviceImage(id) {
            const url = this.baseUrl + `devices/${id}/camera/image`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default DeviceAPI;

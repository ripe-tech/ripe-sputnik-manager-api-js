export const PresetAPI = superclass =>
    class extends superclass {
        async listPresets() {
            const url = this.baseUrl + "presets";
            const contents = await this.get(url);
            return contents;
        }

        async createPreset(payload) {
            const url = this.baseUrl + "presets";
            const contents = await this.put(url, { dataJ: payload });
            return contents;
        }

        async getPreset(id) {
            const url = this.baseUrl + `presets/${id}`;
            const contents = await this.get(url);
            return contents;
        }

        async updatePreset(id, payload) {
            const url = this.baseUrl + `presets/${id}`;
            const contents = await this.put(url, { dataJ: payload });
            return contents;
        }

        async deletePreset(id) {
            const url = this.baseUrl + `presets/${id}`;
            const contents = await this.delete(url);
            return contents;
        }
    };

export default PresetAPI;

export const JobAPI = superclass =>
    class extends superclass {
        async listJobs() {
            const url = this.baseUrl + "jobs";
            const contents = await this.get(url);
            return contents;
        }

        async createJob(payload) {
            const url = this.baseUrl + "jobs";
            const contents = await this.post(url, { dataJ: payload });
            return contents;
        }

        async getJob(id) {
            const url = this.baseUrl + `jobs/${id}`;
            const contents = await this.get(url);
            return contents;
        }

        async streamJob(id) {
            const url = this.baseUrl + `jobs/${id}/stream`;
            const contents = await this.get(url);
            return contents;
        }

        async cancelJob(id, payload) {
            const url = this.baseUrl + `jobs/${id}/cancel`;
            const contents = await this.put(url, { dataJ: payload });
            return contents;
        }

        async getAssetsJob(id) {
            const url = this.baseUrl + `jobs/${id}/assets`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default JobAPI;

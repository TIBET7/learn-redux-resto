export default class RestoService {
    _apiBase = 'http://localhost:3001';

    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`)
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
        async getMenuItems () {
            return await this.getResources('/menu/');
        }   
}
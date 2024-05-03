class ApiService {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return 'Error al obtener los datos';
            }
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            return 'Ocurrió un error interno';
        }
    }
}

const apiService = new ApiService();

export default apiService;
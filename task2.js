class ApiService {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getData(url, retries = 3) {
        let attempts = 0;
        while (attempts < retries) {
            try {
                attempts++;
                console.log(`Attempt ${attempts} to fetch data from ${url}`);
                const data = await this.fetchData(url);
                return data;
            } catch (error) {
                if (attempts >= retries) {
                    console.error(
                        `Failed to fetch data after ${attempts} attempts: ${error.message}`
                    );
                    throw new Error(
                        `Failed to fetch data from ${url} after ${retries} attempts`
                    );
                }
            }
        }
    }
}

const mockApiService = new ApiService();
const mockUrl = "https://jsonplaceholder.typicode.com/posts/1";

mockApiService
    .getData(mockUrl)
    .then((data) => console.log("Data received:", data))
    .catch((error) => console.error("Error:", error.message));

// Example of a URL that will fail (for testing retries)
const invalidUrl = "https://invalidurl.example.com";

mockApiService
    .getData(invalidUrl)
    .then((data) => console.log("Data received:", data))
    .catch((error) => console.error("Error:", error.message));

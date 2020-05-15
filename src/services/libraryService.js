const BASE_URL = 'http://localhost:3001';

class LibraryService {
  async fetchCategories() {
    const result = await fetch(`${BASE_URL}/categories`);

    return await result.json();
  }
}

export default new LibraryService();

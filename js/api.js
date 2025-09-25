const API_BASE_URL = 'http://77.233.222.187/api';

export class UnderVerseAPI {
    static async generateCharacter(answers) {
        const response = await fetch(`${API_BASE_URL}/generate-character`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers })
        });
        return await response.json();
    }

    static async healthCheck() {
        const response = await fetch(`${API_BASE_URL}/health`);
        return await response.json();
    }
}
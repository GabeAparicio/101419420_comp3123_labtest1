function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject("Input must be an array.");
            return;
        }

        try {
            const lowercased = array
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase());

            resolve(lowercased);
        } catch (error) {
            reject(error);
        }
    });
}

// Example usage:
const mixedArray = ["Pokemon", 123, "Dota", true, "Pizza", 31.41, "New York"];

lowerCaseWords(mixedArray)
    .then(result => console.log("Lowercased strings:", result))
    .catch(err => console.error("Error:", err));

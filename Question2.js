const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "resolved success! Yay!" });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: "error: rejected exception! :[" });
        }, 500);
    });
};

// Calls resolvedPromise and handles the result
resolvedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

// Calls the rejectedPromise and handles the result
rejectedPromise()
    .then(result => console.log(result))
    .catch(err => console.error(err));

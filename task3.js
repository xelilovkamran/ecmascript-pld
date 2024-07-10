const performOperations = async () => {
    const result = await fetch("https://example.com/users").catch((err) =>
        console.log("error in fetching data")
    );

    const data = await result
        .json()
        .catch((err) => console.log("error in processing data"));

    if (data) {
        console.log(data);
        console.log("succes");
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    await performOperations();
});

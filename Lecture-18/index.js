const divide = (a, b) => {
    if (a == 0) {
        throw new Error("Cannot divide by zero");
    }

    if (b == 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
}
catch (error) {
    console.log(error.message);
}

finally {
    console.log("Done!");
}

console.log("after divide");


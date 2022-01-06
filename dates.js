//jshint esversion:6
module.exports.getDate = function () {
    const today = new Date();

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    return today.toLocaleDateString("en-US", options);
}
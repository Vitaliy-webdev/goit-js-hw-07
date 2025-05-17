const categories = document.querySelectorAll("li.item");

console.log("Number of categories:", categories.length);

categories.forEach((item) => {
    const categoryName = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elements}`);
});
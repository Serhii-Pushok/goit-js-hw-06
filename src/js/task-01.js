const numberOfCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', numberOfCategoriesEl.length);
numberOfCategoriesEl.forEach(category => {
    const group = [...category.children];
    // console.log(group)
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log('Category:', element.textContent);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log('Elements:', element.children.length);
        }
    });
});
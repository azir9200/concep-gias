const handleCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  const tabContainer = document.getElementById('tab-container');
  //const trimData = data.data.news_category.slice(0, 3);

  data.data.news_category.slice(0, 3).forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <a class="tab">${category.category_news} </a> 
    // `;
    tabContainer.appendChild(div);
  });
  console.log(data.data.news_category);
};
handleCategory();
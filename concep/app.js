const handleCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();

  const tabContainer = document.getElementById('tab-container');
  const trimData = data.data.news_category.slice(0, 3);
  trimData.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <a onclick="handleLoadNews()" class="tab"> ${category.category_name} </a> 
    `;
    tabContainer.appendChild(div);
  });
  //console.log(trimData);
};
const handleLoadNews = (categoryid) => {
  console.log(categoryid);
};


handleCategory();
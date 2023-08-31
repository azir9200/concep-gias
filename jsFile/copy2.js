const handleCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  const tabContainer = document.getElementById('tab-container');
  const trimData = data.data.news_category.slice(0, 3);

  trimData.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML = `

      <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_news} </a> 
     `;
    tabContainer.appendChild(div);
  });
  //console.log(data.data.news_category);
};

const handleLoadNews = (categoryid) => {
  console.log(categoryid);
};
handleCategory();
function fetchGoogleTrendsData() {
    // Google Trends API key is required. Replace 'your-api-key' with your own key.
    const apiKey = 'your-api-key';
  
    const categories = [
      { id: '317', label: 'Anime & Manga' },
      { id: '118', label: 'Video Games' },
      { id: '65',  label: 'TV Shows' },
      { id: '109', label: 'Movies' }
    ];
  
    const contentElement = document.getElementById('content');
  
    categories.forEach(async (category) => {
      const response = await fetch(`https://trends.google.com/trends/api/explore?hl=en-US&tz=-420&req={"comparisonItem":[{"keyword":"/m/${category.id}","geo":"US","time":"today 12-m"}],"category":0,"property":""}&key=${apiKey}`);
      const data = await response.json();
  
      const formattedData = JSON.parse(data.default.data.replace(')]}\'', ''));
      const topResults = formattedData.itemListElement.slice(0, 5);
  
      const categoryElement = document.createElement('div');
      categoryElement.innerHTML = `<h2>${category.label}</h2><ul>${topResults.map(item => `<li>${item.title}</li>`).join('')}</ul>`;
      contentElement.appendChild(categoryElement);
    });
  }
  
  fetchGoogleTrendsData();
  
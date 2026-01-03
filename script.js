// Movement data (loaded from JSON)
let movementData = {};

// Current active category
let currentCategory = 'yoga';

// Load data from JSON file
async function loadData() {
    try {
        const response = await fetch('data.json');
        movementData = await response.json();
        renderTiles(currentCategory);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Function to render tiles
function renderTiles(category) {
    const data = movementData[category];
    const tilesContainer = document.getElementById('tiles-container');
    const categoryTitle = document.getElementById('category-title');
    
    // Update title
    categoryTitle.textContent = data.title;
    
    // Clear container
    tilesContainer.innerHTML = '';
    
    // Create tiles
    data.items.forEach((item, index) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.animationDelay = `${index * 0.1}s`;
        
        tile.innerHTML = `
            <div class="tile-emoji">${item.emoji}</div>
            <h3 class="tile-title">${item.title}</h3>
            <p class="tile-description">${item.description}</p>
            <div class="tile-image">Image placeholder</div>
            <div class="tile-benefits">
                <h4>Benefits:</h4>
                <ul>
                    ${item.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        `;
        
        tilesContainer.appendChild(tile);
    });
}

// Function to switch category
function switchCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
   Load data and initialize
loadData(
    
    // Render tiles for the new category
    renderTiles(category);
}

// Event listeners for category buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchCategory(btn.dataset.category);
    });
});

// Initial render
renderTiles(currentCategory);

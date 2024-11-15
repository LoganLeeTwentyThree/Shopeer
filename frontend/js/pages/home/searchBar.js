function toggleSearchBar() {
    const searchBar = document.querySelector('.search_bar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
}

function submitSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
        // You can implement the search action here (e.g., redirect to a search results page or filter content).
        alert('Searching for: ' + searchInput);
    }
}
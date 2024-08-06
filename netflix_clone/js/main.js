document.getElementById('search-icon').addEventListener('click', function() {
    let searchContainer = document.getElementById('search-container');
    if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
        searchContainer.style.display = 'block';
        document.getElementById('search-input').focus();
    } else {
        searchContainer.style.display = 'none';
    }
});

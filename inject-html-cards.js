
fetch('author-card.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        document.querySelector('#author-card-inject-point').innerHTML = html
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });


fetch('developer-evolution.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        document.querySelector('#developer-evolution-inject-point').innerHTML = html
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

fetch('anatomy-of-pr.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        document.querySelector('#anatomy-of-pr-inject-point').innerHTML = html
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

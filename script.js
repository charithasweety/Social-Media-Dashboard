const mockSocialMediaData = [
    { platform: 'Twitter', text: 'This is a tweet!', image: 'C:\Users\Charitha\Downloads\download.src.png' },
    { platform: 'Facebook', text: 'A Facebook post.', image: 'C:\Users\Charitha\Downloads\f.src.png' },
    { platform: 'Instagram', text: 'An Instagram post.', image: 'C:\Users\Charitha\Downloads\i.src.jpeg' }
];

const dashboardElement = document.getElementById('dashboard');
const loginButton = document.getElementById('loginBtn');

function displaySocialMediaContent(data) {
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const platformElement = document.createElement('h2');
        platformElement.textContent = post.platform;
        postElement.appendChild(platformElement);

        if (post.image) {
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            postElement.appendChild(imageElement);
        }

        const textElement = document.createElement('p');
        textElement.textContent = post.text;
        postElement.appendChild(textElement);

        dashboardElement.appendChild(postElement);
    });
}

loginButton.addEventListener('click', () => {
    // Implement login functionality here
    alert('Login button clicked');
});

displaySocialMediaContent(mockSocialMediaData);

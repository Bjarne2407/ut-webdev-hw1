// const url = "https://www.jsonkeeper.com/b/VCWJX"

// fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//     })

const datapath = 'db/post_db.json';

fetch(datapath)
    .then((response) => response.json())
    .then((data) => { 
        const posts = data["posts"];

        posts.forEach(post => {
            const createdAt = post["createdAt"];
            const description = post["description"];             
            const article = document.createElement("article");
            const header = document.createElement("header");
            const profilePicture = new Image(24);
            profilePicture.src = "res/avatar.svg";
            header.appendChild(profilePicture);

            const time = document.createElement("time");
            time.dateTime = createdAt; 
            const dateString = document.createTextNode(new Date(createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: '2-digit',
                year: 'numeric'
            }));
            time.appendChild(dateString);
            header.appendChild(time);
            article.appendChild(header);

            if (post["containsImage"]) {
                const imgData = new Image();
                imgData.src = post["base64encodedImage"];
                article.appendChild(imgData);
            }

            const p = document.createElement("p");
            const postDescription = document.createTextNode(description);
            p.appendChild(postDescription);
            article.appendChild(p);
                
            const button = document.createElement("button");
            const like = document.createTextNode("👍");
            button.appendChild(like);
            article.appendChild(button);

            const element = document.getElementById("mainFeed");
            element.appendChild(article);
        });
    })
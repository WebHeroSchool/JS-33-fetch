const searchParams = new URLSearchParams(window.location.search);
let userName = searchParams.get('username');
    if(searchParams.has('username') && userName !== '') {
        fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(json => {
            if (json.message !== 'Not Found') {
                let name = document.createElement('a');
                name.setAttribute('href', json.html_url);
                name.innerHTML = json.name;
                document.body.appendChild(name);

                let bio = document.createElement('div');
                bio.innerHTML = json.bio;
                document.body.appendChild(bio);

                let avatar = document.createElement('img');
                avatar.setAttribute('src', json.avatar_url);
                document.body.appendChild(avatar);
            } else {
                let p = document.createElement('p');
                p.innerHTML =  'Информация о пользователе недоступна';
                document.body.appendChild(p);
            }
        })
        .catch(error => {
            alert(error);
        });
    } else {
        alert('Введите данные в URL');
    }
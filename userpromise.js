fetch('https://dummyjson.com/users')
    .then((res) => {
        console.log(res);
        res.json()
    .then((resMessage) => {
            console.log(resMessage);
            displaydata(resMessage)
        })
        .catch((errMessage) => {
                console.log(errMessage);
        })
    })
    .catch((err) => {
        console.log(err);
    })

function displaydata(resMessage) {
    let body = document.getElementById('jsp');
    let container = document.createElement('div');
    container.className = 'user-container';
    
    resMessage.users.map((x) => {
        let data = document.createElement('div');
        data.className = 'user-card';
        
        
        let head = document.createElement('p');
        head.style.fontWeight='700'
        head.className='pera';
        head.textContent = `${x.firstName} ${x.lastName}`;
        
        let image = document.createElement('img');
        image.src = x.image;
        
        let birthdate=document.createElement('p')
        birthdate.className='pera';
        birthdate.textContent=`BirthDate: ${x.birthDate}`;
        
        let hair=document.createElement('p');
        hair.className='pera';
        hair .textContent =`Hair: ${x.hair.color} ${x.hair.type}`;
        
        let phone = document.createElement('p');
        phone.className='pera';
        phone.textContent = `Phone: ${x.phone}`;
        
        let username=document.createElement('p');
        username.className='pera';
        username.textContent = `Username: ${x.username}`

        let id=document.createElement('h1')
        id.style.margin="10px 0px"
        id.textContent = 'ID CARD'

        let dept=document.createElement('p')
        dept.className='pera';
        dept.textContent = `Dept: ${x.company.department}`;

        let role=document.createElement('p')
        role.className='pera';
        role.textContent = `Role: ${x.role}`;

        let title=document.createElement('p')
        title.className='pera';
        title.textContent = `Title: ${x.company.title}`;

        let bgroup=document.createElement('p');
        bgroup.className='pera';
        bgroup.textContent = `Blood Group: ${x.bloodGroup}`

        let gender=document.createElement('p')
        gender.className='pera'
        gender.textContent=`Gender: ${x.gender}`
        
        body.appendChild(container);
        data.appendChild(id)
        data.appendChild(head);
        data.appendChild(image);
        data.appendChild(role)
        data.appendChild(dept)
        data.appendChild(title)
        data.appendChild(gender)
        data.appendChild(username)
        data.appendChild(phone);
        data.appendChild(birthdate)
        data.appendChild(hair)
        data.appendChild(bgroup)
        container.appendChild(data);
    });

}


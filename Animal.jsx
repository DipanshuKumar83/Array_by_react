import React from 'react'

const Animal = () => {
        let Animal = [
            {name: 'Dog', sound: 'Woof'},
            {name: 'Cat', sound: 'Meow'},
            {name: 'Bird', sound: 'Tweet'}
        ];

    
return (

    <div>
        {
            Animal.map((Animal) => (
                <h1>{Animal.name}: {Animal.sound}</h1>
            ))
        }
    </div>
)
}

export default Animal

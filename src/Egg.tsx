import { useState } from 'react';
import image from './assets/egg.png';


function Egg() {
    const [count, setCount] = useState(9999);

    const handleClick = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div className="container">
            <h1>CLICK THE EGG!</h1>
            <img src={image} alt="egg-image" className="egg" onClick={handleClick} />
            <p className="counter">Count: {count}</p>
        </div>
    );
}

export default Egg
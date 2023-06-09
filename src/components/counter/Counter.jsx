import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import avtar from "../../assets/avt2.jpg"


const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        if(counter === 0){
            // alert("Cannot go below 0 ")
            return ;
        }
        
            setCounter(counter -1);
    };
       
    const reset = () => {
      setCounter(0);
    };
  return (
    <div className='Main-counter'>
      <Card style={{ width: '15rem' , gap:'2rem ' }}>
      <Card.Img variant="top" src={avtar} className='w-100 h-50' />
      <Card.Body>
        <Card.Title >
            <h3>Somaditya Tripathi</h3>
            <p >Frontend Developer</p>
        </Card.Title>
        <h2>Counter App</h2>
        <div className='counter d-flex'>

            <button className='btn' variant="primary" type="button" onClick={() => handleIncrease()}>➕</button>
            <strong className='p-2'>{counter}</strong>
            <button className='btn' type="button " variant="primary" onClick={() => handleDecrease()}>➖</button>

        </div>
        <div className='resetBtn'>
          <Button className='width-30 text-center' onClick={() => reset()} variant="primary">Reset</Button>{' '}
        </div>
      </Card.Body>
    </Card>
       
    </div>
  )
}

export default Counter
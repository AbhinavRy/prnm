import React,{useState} from 'react'
import styles from './RotateDiv.module.scss'
import image from '../Assets/1.png'
import image1 from '../Assets/2.png'
import image2 from '../Assets/5.png'
import styled from 'styled-components'

const RotatDiv = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    transform: rotate(${props => props.rot}deg);
    transition: transform 0.25s;
`

const RotateImg = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    transform: rotate(${props => -props.rot}deg);
    transition: transform 0.25s;
`


const RotateDiv = () => {
    const [rotateVal, setRotateVal] = useState(0)
    
    const handleRotate = () => {
        setRotateVal(prev => prev + 120)
        console.log(rotateVal)
    }

    return (
        <div className={styles.container}>
            <div className={styles.rotateDiv} rot={rotateVal}>
                <RotateImg  className={styles.rotateImg} rot={rotateVal} src={image1} alt=""/>
                <RotateImg  className={styles.rotateImg} rot={rotateVal} src={image2} alt=""/>
                <RotateImg  className={styles.rotateImg} rot={rotateVal} src={image} alt="1"/>
            </div>
            <button onClick={handleRotate}>Right</button>
            <button onClick={handleRotate}>Left</button>
        </div>
    )
}

export default RotateDiv

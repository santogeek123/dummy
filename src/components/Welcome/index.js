/**
 * Component Welcome
 * 
 * Props accepts
 * 
 * timer (mandatory) - to switch between the action buttons.
 * navigationHandler (mandatory) - to navigate to question screen.
 * 
 */
import React from "react";
import styles from "./style.module.css";
import Button from 'react-bootstrap/Button';

const WelcomeScreen = (props)=>{
    return (
        <div data-test="header-wrap">
            <h2 className={styles.title}>React Test</h2>
            <p>This React test checks your basic knowledge of React. It includes 5 questions and each question includes 4 options. Select an appropriate answer out of 4 options.</p>
            <p>We recommend having an environment ready, so you can solve problems outside of browser.</p>
            <p>Test Duration is 10min</p>
            <p>Good Luck!</p>
            {
                props.timer ? <div><Button  className={styles.btnMargin} onClick={() => props.navigateHandler()} variant="info">Continue Test</Button>
                <Button className={styles.btnMargin} onClick={() => props.navigateHandler(true)} variant="info">Retake Test</Button>
                </div>:
                <Button className={styles.btnMargin}  onClick={() => props.navigateHandler(true)} variant="info">Start Test</Button>
            }
            
        </div>
    )
}

export default WelcomeScreen;
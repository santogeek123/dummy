/**
 * Component Question
 * 
 * Props accepts
 * 
 * handleChange(actionType, optionindex, arrIndex, selectedVal)
 *      actionType - checkbox,textarea,radio
 *      optionindex - index opf the option selected (starting from 0)
 *      arrIndex - question json index (starting from 0)
 *      selectedVal - Text for the selected option
 * 
 * questionData - data for the current question strip (object)
 * disabled - disable the fields or not (true/false)
 * showAnswer - To display the right answer (true/false)
 * 
 */

import React from "react";
import styles from "./style.module.css";
import { Alert, Form } from 'react-bootstrap';

const Questions = (props) => {
    return (

        <Form>
            <div className={`${styles.CardMargin} card`} >
                <h5 className="card-header">{props.questionData.question}</h5>
                <Alert variant="info">
                    <div className="card-body">
                        {
                            props.questionData.options.map((item, i) => {

                                if (props.questionData.questionType === "radio") {
                                    return (<div key={i} className={`${styles.formCheck} form-check card-text`}>
                                        <span>{item.selectedOption}</span>
                                        <Form.Check
                                            checked={i === props.questionData.selectedOption}
                                            disabled={props.disabled}
                                            type={"radio"}
                                            id={i}
                                            name={"radio"}
                                            label={item}
                                            onChange={(evt) => { props.handleChange(props.questionData.questionType, i, props.questionData.id, item) }}
                                        />
                                    </div>)
                                }
                                if (props.questionData.questionType === "checkbox") {
                                    return (<div key={i} className={`${styles.formCheck} form-check card-text`}>
                                    <span>{item.selectedOption}</span>
                                    <Form.Check controlid={"ControlCheckbox" + i}
                                        disabled={props.disabled}
                                        value={item.name}
                                        className="checkbox-control"
                                        type={"checkbox"}
                                        checked={item.selected}
                                        label={item.name}
                                        onChange={(evt) => { props.handleChange(props.questionData.questionType, i, props.questionData.id, item.name) }}
                                    />
                                </div> ) 
                                }
                            })
                        }
                        {
                             props.questionData.questionType === "textarea"?
                             <div>
                                    <Form.Group >
                                        <Form.Label></Form.Label>
                                        <Form.Control controlid="ControlTextarea" className="textarea-control" disabled={props.disabled} onChange={(e)=>{props.handleChange(props.questionData.questionType,null,props.questionData.id,e.target.value)}} as="textarea" value={props.questionData.selectedVal} rows="3" />
                                    </Form.Group>
                                </div> : null


                        }
                    </div>
                    {props.showAnswer ?
                        <div className="card-body">
                            {
                                Array.isArray(props.questionData.answer) ?
                                    <span className="form-check card-text">Correct Answer - {props.questionData.answer.join()}</span> :
                                    <span className="form-check card-text">Correct Answer - {props.questionData.answer}</span>
                            }

                        </div> : null
                    }

                </Alert>
            </div>
        </Form>
    )
}


export default Questions
/**
 * Component Timer
 * 
 * Props accepts
 * 
 * time (Mandatory)
 * object { h,m,s}
 * 
 */
import React from "react";

const Timer = (props)=>{
    return (
        <div>
                {(props.time.h || props.time.m || props.time.s) && props.foreground ?
                    <div>{"Time"}: {props.time.h}:{props.time.m}:{props.time.s}</div> : null
                }

            </div>
    )
}

export default Timer;
import React, { Component } from 'react';
import Styles from './componentsStyle.module.scss';


export default function OutLineButton(props) {

     return (
          // Not working ?!
          <button type="button" onClick={props.clickFunc} className={Styles.outlineButton}>
               {props.buttonText}
          </button>
             
     );

}


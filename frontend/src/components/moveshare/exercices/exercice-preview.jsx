import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Avatar, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "./exercice-preview.css";
import {Link } from "react-router-dom";
import ExerciceDetail from "./exercice-details.jsx"
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";


import imageError from 'common/images/exercice.png'

import Fav from "./fav/fav";

export default function ExercicePreview({exercice,type=null,callBack}) {
  const [modalVisible, setModalVisible] = useState(false);
  let history = useHistory();

  const checkType=()=>{
    if(type=="profile"){
      return "exercice_preview_profile"
    }
    return "exercice_preview"
  }

  const onError = (e) => {
    e.target.src=imageError
  }

  const closeModal=()=>{
    setModalVisible(false)
  }

  const moreInfo=()=>{
    setModalVisible(true)
  }
  const goToprofile=()=>{
    // history.replace('@'+exercice.author.username)
    window.location.href = '/@'+exercice.author.username;

  }

  return (
    <StylesProvider injectFirst>
      <Card className={checkType()}>
        <div className="exercice_preview_header">
          <Chip
            avatar={<Avatar><img src={exercice.author.image} /></Avatar>}
            label={exercice.author.username}
            color="primary"
            className="exercice_preview_header_author"
            size="small"
            onClick={goToprofile}/>
          <img className="exer_preview_img" src={exercice.image} onError={onError} />
        </div>
        <div className="exercice_preview_content">
          <Typography variant="body1" className="exercice_preview_content--title">
            {exercice.name}
          </Typography>

          <Typography variant="body2">
            Type: 
            {
              exercice.categories.map((category,index) =>
                <span key={index}>{category.name}</span>
              )
            }
          </Typography>
        </div>
        <div className="exercice_preview_footer">
          <Fav
            className="exercice_preview_footer--button exercice_preview_footer--button--info"
            exercice={exercice}
            callBack={callBack}
          ></Fav>
          <Button className="exercice_preview_footer--button exercice_preview_footer--button--info" onClick={moreInfo}>
            More Info
          </Button>
        </div>
      </Card>
          <ExerciceDetail visibleModal={modalVisible} setvisibleModal={setModalVisible}exercice={exercice} callBack={callBack}/>
    </StylesProvider>
    
  );
}

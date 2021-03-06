import React, { Component } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import { PickerOverlay, PickerInline, client } from 'filestack-react';
import ReactFilestack from 'react-filestack'
import ImageAPI from './ImageAPI'
import { render } from 'react-dom'; 

//styling
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Badge,
  CardMedia,
  IconButton,
  makeStyles,
  Paper,
  InputBase,
  Card,
  withStyles,
  CardActionArea,
} from "@material-ui/core";
import "../App/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from "@material-ui/core/colors/purple";
import canvas from "../../canvas.jpg";
import SubmitButton from "../SubmitButton/SubmitButton.js";
import TextField from "@material-ui/core/TextField";

const styles = {
  inputs: {
    width: "",
    paddingTop: "0px",
    // marginTop: '20px',
    verticalAlign: "middle",
    fontFamily: "Arial",
    // height: '100%'
  },
  paperContainer: {
    backgroundImage: `url(${canvas})`,
    paddingTop: "20px",
  },
  typography: {
    fontFamily: "Arial",
  },

  paper: {
    backgroundColor: "",
    width: "35vw",
    height: "auto",
    margin: "auto",
    textAlign: "center",
    marginTop: "10px",
    paddingTop: "20px",
  },
  paddingTop: {
    paddingTop: "20px",
  },
  centerText: {
    textAlign: "center",
  },
  alignAndJustify: {
    width: 500,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    margin: "auto",
  },
  thumbnail: "require('../../src/canvas.jpg')",
  // media : {
  //   height: '0'
  // },
  media: {
    objectFit: "cover", // paddingTop: '56.25%', // 16:9
  },
};

// const theme = createMuiTheme({
//   shape: {
//     borderRadius: "0px",
//   },
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: "#FFA500",
//     },
//     // background: {
//     //     default : '#42f59b'
//     // },
//     typography: {
//       fontFamily: "Arial",
//     },
//   },
//   //   typography: {
//   //     fontFamily: [
//   //         'cursive',
//   //         'Chilanka',
//   //     ].join(','),
//   // }
// });

// export default function ArtForm() {
class ArtForm extends Component {
  
  state = {
    newArt: {
      user_id: "",
      title: "",
      medium: "",
      dimension: "",
      url: "",
      statement: "",
    },
  };

  handleInputChange = (event, inputProperty) => {
    console.log("Handling input-change...");
    console.log("Setting state...");

    this.setState(
      {
        newArt: {
          ...this.state.newArt,
          [inputProperty]: event.target.value,
          user_id: this.props.store.user.id,
        },
      },
      function () {
        console.log("state has been set:", this.state);
      }
    );
  };

// appendDiv = () => {
//   <div id='imageAPI'></div>

// }

openAPI = () => {
  //  <ImageAPI/>;
  console.log('Appending Div')
  render( 
    React.createElement(ImageAPI),document.getElementById('imageAPI'))

  
  


 }
// showUploader = () => {
 
// }
  addArt = () => {
    if (this.state.newArt.title === "") {
      alert("A title is required for your Artwork.");
    } else {
      console.log(`Sending ${this.state.newArt.title} to Database...`);
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);

      this.props.dispatch({ type: "ADD_ART", payload: this.state.newArt });
      this.setState({
        newArt: {
          user_id: "",
          title: "",
          medium: "",
          dimension: "",
          url: "",
          statement: "",
        },
      });
    }
  };



  
  render() {
    const { classes } = this.props;
    //  const client = filestack.init("A2ocoVhiLQseuc8qsSbygz");


    return (
      // <ThemeProvider theme={theme}>
        // <CssBaseline />
        <Grid
          container
          className={classes.paper}
          //alignItems="center"
          spacing={2}
          direction="column"
        >

          <Paper
          
            // className={classes.paddingTop}
             style={styles.paperContainer}
            elevation={10}
            // className={classes.paper}
            backgroundImage={canvas}
          >
            {/* <CardActionArea> */}
              {/* <CardMedia 
                  // height="140"
                  // component="img"
                  style={{width: '130px', height: '130px'}}
                  alt="Blank Canvas"
                  className={classes.media} image={canvas} title='Blank Canvas'/> */}
            {/* </CardActionArea> */}
            <form
            //   style={{ verticalAlign: 'middle' }}
            >
              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="Title"
                  name="title"
                  // className={classes.inputs}
                  value={this.state.newArt.title}
                  onChange={(event) => this.handleInputChange(event, "title")}
                />
              </Grid>
              <br />
              <Grid item xs={12.0} sm={12}>
                {/* // align="center">  */}
                <TextField
                  variant="outlined"
                  label="Medium"
                  name="medium"
                  style={styles.inputs}
                  value={this.state.newArt.medium}
                  onChange={(event) => this.handleInputChange(event, "medium")}
                />
              </Grid>
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="Dimensions"
                  name="dimension"
                  className={classes.inputs}
                  value={this.state.newArt.dimension}
                  onChange={(event) =>
                    this.handleInputChange(event, "dimension")
                  }
                />
              </Grid>
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  variant="outlined"
                  label="URL"
                  name="url"
                  className={classes.inputs}
                  value={this.state.newArt.url}
                  onChange={(event) => this.handleInputChange(event, "url")}
                />
                <script>
    
    </script>
                {/* <button onClick={this.appendDiv()}>Image API</button> */}
                 <div id='imageAPI'>Not Rendered</div> 
             
                <button onClick={this.openAPI}>Open API</button>

              </Grid>
              <br />

              <Grid item xs={12.0} sm={12}>
                <TextField
                  id="standard-textarea"
                  variant="outlined"
                  label="Statement"
                  rows={4}
                  rowsMax={20}
                  name="statement"
                  multiline
                  //  className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                  value={this.state.newArt.statement}
                  onChange={(event) =>
                    this.handleInputChange(event, "statement")
                  }
                />
              </Grid>

              <br />
              <Grid item xs={12.0} sm={12}>
              {/* <button value="Pick Watermark" id="pickWatermark" onclick="pickMark()">here</button> */}

                {/* <button onClick={(event) => client.picker().open()}>click</button> */}
                <SubmitButton
                  addArtProp={this.addArt}
                  elevation={20}
                  //  className={classes.typography}
                  //  textAlign='center'
                  //  justify='center'
                  style={{ justifyContent: "center" }}
                  //  <Button elevation={10}
                  //  Box display="flex" flexDirection="column"
                  //  textAlign='center'
                  //  display='flex'
                  //  justifyContent='center'
                  //  justify="center"
                  //  onClick={this.addArt}
                  //  variant="raised"
                  //  color="purple"
                  //  className={classes.alignAndJustify}
                >
                  SUBMIT TO GALLERY!
                </SubmitButton>
              </Grid>
              <br />
            </form>
            {/* </Card> */}
            {/* </Grid> */}
          </Paper>
        </Grid>
      // </ThemeProvider>
    ); //END return
  } //END render
} //END ArtForm
export default connect(mapStoreToProps)(withStyles(styles)(ArtForm));

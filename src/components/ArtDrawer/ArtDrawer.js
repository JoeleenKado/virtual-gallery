import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ArtForm from './ArtForm'
import EditForm from './EditForm'

//styling
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, withStyles} from '@material-ui/core'



const styles = {
  inputs: {
      width: '20%',

  }
}
// const artToEdit= this.state.art
class ArtDrawer extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ART' });
  }

//   state = {
//     artToEdit: {
//       id: '',
//       user_id: '',
//       title: '',
//       medium: '',
//       dimension: '',
//       url: '',
//       statement: ''
//     },
// }

// handleInputChange = (event, inputProperty) => {
//   console.log('Handling input-change...');
//   console.log('Setting state...');
  
//   //console.log('Handling input change. this.state.newArt.user_id', this.state.newArt.user_id);
//               this.setState({
//                 artToEdit : {
//                   ...this.state.artToEdit,
//                   [inputProperty]: event.target.value,
//                   // id : this.props,
//                   //user_id : this.props.store.user.id
//                 }
//               }, function () {
//                   console.log('State has been set:', this.state);
//               })
//             }
  // const shelfData = useSelector((state) => state.shelf);

//   openEdit = (event, art) => {
//     console.log(`In openEdit function...`);
//     console.log('art:', art);
//     console.log('Setting state...')
//     this.setState({
//       artToEdit : {
//         ...this.state.artToEdit,
//         id : art.id,
//         user_id : this.props.store.user.id,
//         title : art.title,
//         medium : art.medium,
//         dimension : art.dimension,
//         url : art.url,
//         statement : art.statement
//       }
//     }, function () {
//         console.log('State has been set:', this.state);
//     })
//   }

//   updateConfirmation = (artToEdit) => {

//     if(this.state.artToEdit.title === '') {
//       alert('A title is required for your Artwork.')
//     } else {

//     confirmAlert({
//       title: 'Please Confirm',
//       message: `Would you like to save edits made to ${artToEdit.title}?`,
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => this.updateArt()
//         },
//         {
//           label: 'No',
//           onClick: () => alert('Edit Canceled')
//         }
//       ]
//     })
//       }
//     }
  
  
  
  
  
  
//   updateArt = () => {
   
//         console.log(`Saving edit(s) to Database...`);
//     //Clear message... should say Hello!
//     //console.log(`Sending ${this.state.newArt} to DB.`);

//         this.props.dispatch({ type: 'UPDATE_ART', payload: this.state.artToEdit })
    
//     // this.setState({
    
    //    newArt: {title: '',
    //     medium: '',
    //     dimension: '',
    //     url: '',
    //     statement: ''}
    // }
    // )
  
//   }
//   deleteConfirmation = (event, art) => {
//   confirmAlert({
//     title: 'Please Confirm',
//     message: `Would you like to Delete ${art.title}?`,
//     buttons: [
//       {
//         label: 'Yes',
//         onClick: () => this.deleteArt(event, art)
//       },
//       {
//         label: 'No',
//         onClick: () => alert('Deletion Canceled')
//       }
//     ]
//   })}

//   deleteArt = (event, art) => {
    
    
  
//     console.log(`Deleting ${art.title}...`);
//     console.log(art);
    
//     //Clear message... should say Hello!
//     //console.log(`Sending ${this.state.newArt} to DB.`);

//     this.props.dispatch({ type: 'DELETE_ART', payload: art.id })

//     // this.setState({
    
//     //    newArt: {title: '',
//     //     medium: '',
//     //     dimension: '',
//     //     url: '',
//     //     statement: ''}
//     // }
//     // )
//   }




  render() {
    // const art = useSelector((state) => state.store.art);
    // const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;



    return (
      <div>
        RS: {JSON.stringify(this.props.store)}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <h3>Here is your art: {JSON.stringify(art)}</h3> 

        <h3>SUBMIT ART TO GALLERY</h3>
        <ArtForm/>
        <EditForm/>


   
  <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(withStyles(styles)(ArtDrawer));
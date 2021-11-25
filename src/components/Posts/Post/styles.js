import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '30%',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    borderRadius: '50%',
    width:'70%',
display:'flex',
alignSelf:'center'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '120%',
    display:'flex',
    justifyContent:'center'
    
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '400px',
    position: 'relative',
    marginBottom:'40px',

  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
   height:'50%',
   width:"100%",
  textTransform:'capitalize',
  margin:'20px 20px',
  textAlign: 'start'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
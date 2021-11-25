import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    borderRadius: '50%',
    border:'1px solid black',
    width:'60%',
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
    height: '120%',
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
  textAlign:'center'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
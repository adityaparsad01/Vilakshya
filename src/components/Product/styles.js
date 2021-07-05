import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title:{
    textTransform: "capitalize",
    backgroundColor: "red"
  },
  price:{
    display:"flex"
  },
  mainprice:{
    color:"#757575",
    padding:"10px",
    textDecoration: "line-through"
  }
}));

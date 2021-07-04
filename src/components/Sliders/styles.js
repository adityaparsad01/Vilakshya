import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  slide: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftArrow: {
    position: 'absolute',
    top: '50%',
    left: '32px',
    fontSize: '3rem',
    color: '#000',
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none'
  },
  rightArrow: {
    position: 'absolute',
    top: '50%',
    right: '32px',
    fontSize: '3rem',
    color: '#000',
    zIndex: 10,
    cursor: 'pointer',
    userSelect: 'none'
  },
  image: {
    width: '1000px',
    height: '600px',
    borderRadius: '10px'
  }
}));
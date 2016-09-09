import reactCSS from 'reactcss';

const styles = reactCSS({
  'default':{
    finalBody: {
      backgroundColor: '#eaedf2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    finalNav: {
      textAlign: 'center'
    },
    finalContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '5px;',
      marginBottom: '100px',
      width: '100%',
      maxWidth: '600'
    },
    finalTransactionFeed: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      width: '100%'
    },
    finalTransactionFeedItem: {
      padding: '25',
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px dashed #eee'
    }
  },
  'hover': {
    finalTransactionFeedItem: {
      backgroundColor: '#eee',
      cursor: 'pointer'
    }
  }
});

module.exports = styles;

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
      borderRadius: 5,
      marginBottom: 100,
      width: '100%',
      maxWidth: 600
    },
    finalTransactionFeed: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      width: '100%'
    },
    finalTransactionFeedItem: {
      padding: 25,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #eee',
      cursor: 'pointer'
    },
    finalTransactionMeta: {
      flex: 1,
      marginLeft: 20
    },
    finalTransactionTitle: {
      fontSize: 20
    },
    finalTransactionDate: {
      color: '#999',
      fontSize: 15
    },
    finalTransactionAmount: {
      fontSize: 20
    },
    finalTransactionIcon: {
      fontSize: 40,
      padding: 10,
      color: '#fff',
      borderRadius: 5
    },
    positiveTransactions: {
      color: 'rgb(146, 177, 129)'
    },
    negativeTransactions: {
      color: 'rgb(214, 113, 113)'
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

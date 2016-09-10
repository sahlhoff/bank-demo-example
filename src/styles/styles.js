import reactCSS from 'reactcss';

const positiveColor = 'rgb(146, 177, 129)';
const negativeColor = 'rgb(214, 113, 113)';

const styles = reactCSS({
  'default':{
    link: {
      textDecoration: 'none',
      color: '#333'
    },
    finalBody: {
      backgroundColor: '#b8e4f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      minHeight: '800'
    },
    finalNav: {
      textAlign: 'center',
      backgroundColor: '#fff',
      width: '100%',
      fontSize: 20
    },
    finalContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff',
      margin: '75px 0 75px 0',
      width: '100%',
      maxWidth: 600
    },
    finalPageCTA: {
      textAlign: 'center',
      color: '#999',
      padding: 5
    },
    finalHomeContainer: {
      width: '100%'
    },
    finalHomeAccountContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: 20
    },
    finalHomeAccountBalance: {
      fontSize: 50,
      color: negativeColor
    },
    finalHomeAccountCredit: {
      fontSize: 50,
      color: positiveColor
    },
    finalTransactionFeedContainer: {
      width: '100%'
    },
    finalTransactionSort: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      color: '#999'
    },
    finalTransactionSortItem: { 
      cursor: 'pointer'
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
      color: positiveColor
    },
    negativeTransactions: {
      color: negativeColor
    },
    finalExpandedTransactionContainer: {
      textAlign: 'center',
      padding: 20,
      minHeight: 400,
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    finalExpandedTransactionTitle: {
      fontSize: 40
    },
    finalExpandedTransactionAmount: {
      fontSize: 60
    },
    finalExpandedTransactionDate: {
      fontSize: 20,
      color: '#999'
    },
    finalExpandedTransaction:{
      
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

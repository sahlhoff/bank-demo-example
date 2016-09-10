import reactCSS from 'reactcss';

const positiveColor = 'rgb(146, 177, 129)';
const negativeColor = 'rgb(214, 113, 113)';

const styles = reactCSS({
  'default':{
    link: {
      textDecoration: 'none',
      color: '#333'
    },
    bankBody: {
      backgroundColor: '#b8e4f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      minHeight: '800'
    },
    bankNav: {
      textAlign: 'center',
      backgroundColor: '#fff',
      width: '100%',
      fontSize: 20
    },
    bankContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#fff',
      margin: '75px 0 75px 0',
      width: '100%',
      maxWidth: 600
    },
    bankPageCTA: {
      textAlign: 'center',
      color: '#999',
      padding: 5
    },
    bankHomeContainer: {
      width: '100%'
    },
    bankHomeAccountContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      padding: 20
    },
    bankHomeAccountBalance: {
      fontSize: 50,
      color: negativeColor
    },
    bankHomeAccountCredit: {
      fontSize: 50,
      color: positiveColor
    },
    bankTransactionFeedContainer: {
      width: '100%'
    },
    bankTransactionSort: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      color: '#999'
    },
    bankTransactionSortItem: { 
      cursor: 'pointer'
    },
    bankTransactionFeed: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      width: '100%'
    },
    bankTransactionFeedItem: {
      padding: 25,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #eee',
      cursor: 'pointer'
    },
    bankTransactionMeta: {
      flex: 1,
      marginLeft: 20
    },
    bankTransactionTitle: {
      fontSize: 20
    },
    bankTransactionDate: {
      color: '#999',
      fontSize: 15
    },
    bankTransactionAmount: {
      fontSize: 20
    },
    bankTransactionIcon: {
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
    bankExpandedTransactionContainer: {
      textAlign: 'center',
      padding: 20,
      minHeight: 400,
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column'
    },
    bankExpandedTransactionTitle: {
      fontSize: 40
    },
    bankExpandedTransactionAmount: {
      fontSize: 60
    },
    bankExpandedTransactionDate: {
      fontSize: 20,
      color: '#999'
    },
    bankExpandedTransaction:{
      
    }
  },
  'hover': {
    bankTransactionFeedItem: {
      backgroundColor: '#eee',
      cursor: 'pointer'
    }
  }
});

module.exports = styles;

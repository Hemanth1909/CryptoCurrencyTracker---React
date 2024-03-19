// Write your code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    return <CryptocurrencyList />
  }
}

export default CryptocurrencyTracker

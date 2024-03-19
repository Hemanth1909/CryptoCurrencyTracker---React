// Write your JS code here

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoList: formattedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    console.log(cryptoList)

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="main-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-main-logo"
            />
            <div className="table-container">
              <div className="header-container">
                <p className="first-column">COIN TYPE</p>
                <div className="bottom-header-container">
                  <p className="first-value">USD</p>
                  <p className="second-value">EURO</p>
                </div>
              </div>
              {cryptoList.map(eachCrypto => (
                <CryptocurrencyItem
                  cryptoDetails={eachCrypto}
                  key={eachCrypto.id}
                />
              ))}
            </div>

            {/* <div className="header-container">
          {/* <div className="bottom-header-container"></div> 
        </div> */}
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList

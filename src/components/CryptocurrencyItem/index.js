// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = cryptoDetails
  return (
    <li className="crypto-container">
      <div className="top-container">
        <img src={currencyLogo} className="crypto-logo" alt={currencyName} />
        <p className="crypto-title">{currencyName}</p>
      </div>
      <div className="bottom-container">
        <p className="first-value">{usdValue}</p>

        <p className="second-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem

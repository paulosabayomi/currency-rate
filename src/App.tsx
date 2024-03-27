import React from 'react';
import './App.css';
import Header from './components/layout/header';
import { fetch_data } from './shared/functions';
import MainComponent from './components/main/MainComponent';
import { useAppDispatch } from './shared/hooks';
import { setFromCurrency, setToCurrency } from './shared/rdx-slice';
import cryptoList from './shared/cryptoList';
import hardCurrencyList from './shared/hardCurrencyList';
import Footer from './components/layout/footer';
import { STORAGE_NAME } from './shared/constants';

const App: React.MemoExoticComponent<() => JSX.Element> = React.memo(() => {
  const dispatch = useAppDispatch()

  const handleFetchDefaultData = React.useCallback(async () => {
    try {
      // Set default values
      const recentConversion = JSON.parse(localStorage.getItem(STORAGE_NAME) || '{}')
      const from_currency: keyof typeof cryptoList = recentConversion.from || "BTC"
      const to_currency: keyof typeof hardCurrencyList = recentConversion.to || "USD"
      dispatch(setFromCurrency({value: from_currency, label: cryptoList[from_currency] + " " + from_currency, rawLabel: cryptoList[from_currency]}))
      dispatch(setToCurrency({value: to_currency, label: hardCurrencyList[to_currency] + " " + to_currency, rawLabel: hardCurrencyList[to_currency]}))
  
      const request_data = await fetch_data(from_currency, to_currency);      
    } catch (error) {}
  }, []);

  React.useLayoutEffect(() => {
    handleFetchDefaultData()
  }, []);

  return (
    <div className="App">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
})

export default App;

const exchangeRates = {
    "USD": { "EUR": 0.91, "IDR": 15500, "GBP": 0.75, "JPY": 110, "AUD": 1.45 },
    "EUR": { "USD": 1.1, "IDR": 17000, "GBP": 0.85, "JPY": 121, "AUD": 1.61 },
    "IDR": { "USD": 0.000064, "EUR": 0.000059, "GBP": 0.000053, "JPY": 0.0071, "AUD": 0.000094 },
    "GBP": { "USD": 1.33, "EUR": 1.17, "IDR": 19000, "JPY": 142, "AUD": 1.89 },
    "JPY": { "USD": 0.0091, "EUR": 0.0083, "IDR": 141, "GBP": 0.0070, "AUD": 0.013 },
    "AUD": { "USD": 0.69, "EUR": 0.62, "IDR": 10600, "GBP": 0.53, "JPY": 76 }
};

async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    
    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = "Choose different currencies";
        return;
    }
    
    try {
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        let data = await response.json();
        let rate = data.rates[toCurrency];
        let convertedAmount = amount * rate;
        
        document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error fetching exchange rates";
    }
}

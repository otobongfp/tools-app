import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Slider,
} from "@mui/material";
import axios from "axios";

const RewardCalculator = () => {
  const [amount, setAmount] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [ltoAmount, setLtoAmount] = useState(0);
  const [usd, setUsd] = useState(0);
  const [rewardsPerMonth, setRewardsPerMonth] = useState("");
  const [rewardsPerYear, setRewardsPerYear] = useState("");
  const [calc, setCalc] = useState(false);
  const [apy, setApy] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "lto-network",
              vs_currencies: "usd",
              include_market_cap: true,
            },
          }
        );
        const priceData = priceResponse.data;
        setUsd(priceData["lto-network"].usd);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ltoToUSDExchangeRate = 0.1; // Adjust this with the actual exchange rate

  const handleCalculate = () => {
    const rewards = parseFloat(amount) * parseFloat(apy / 100);
    setRewardsPerMonth((rewards / parseFloat(12)).toFixed(2));
    setRewardsPerYear(rewards.toFixed(2));
    setCalc(true);
  };

  const handleSliderChange = (event, newValue) => {
    setLtoAmount(newValue);
    setAmount(newValue.toString());
  };

  const handleChange = (e) => {
    setLtoAmount(e.target.value);
    setAmount(e.target.value);
  };

  return (
    <div
      style={{
        paddingTop: "5%",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "20%",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Reward Calculator
          </Typography>
          <Slider
            value={ltoAmount}
            onChange={handleSliderChange}
            min={0}
            max={250000}
            step={1}
            valueLabelDisplay="auto"
          />
          <Typography variant="body1" style={{ marginTop: 10, fontSize: 16 }}>
            Value: {ltoAmount} LTO (${(ltoAmount * usd).toFixed(2)} USD)
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: 10, color: "#17054B", fontSize: 16 }}
          >
            APY:{" >"}
            {apy}%
          </Typography>
          <TextField
            label="Amount Leased"
            variant="outlined"
            value={amount}
            onChange={(e) => handleChange(e)}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            margin="normal"
          />
          {/* <TextField
            label="Timeframe (in months)"
            variant="outlined"
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            margin="normal"
          /> */}
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Calculate
          </Button>
          {calc && (
            <div>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                Rewards per Month:
              </Typography>
              <Typography>
                <span
                  style={{ color: "#17054B", fontSize: 14, fontWeight: 600 }}
                >
                  {`${rewardsPerMonth} - ${(
                    (ltoAmount * (8.99 / 100)) /
                    12
                  ).toFixed(2)}`}{" "}
                  LTO{"  "}
                  {`($ ${(rewardsPerMonth * ltoToUSDExchangeRate).toFixed(2)}
                    - $
                    ${(
                      ((ltoAmount * 8.99) / 100 / 12) *
                      ltoToUSDExchangeRate
                    ).toFixed(2)}
                  USD)`}
                </span>
              </Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                Rewards per Year:
              </Typography>
              <Typography>
                <span
                  style={{ color: "#17054B", fontSize: 14, fontWeight: 600 }}
                >
                  {`${rewardsPerYear} - ${(ltoAmount / 100) * 8.99}`} LTO {"  "}
                  {`($${(rewardsPerYear * ltoToUSDExchangeRate).toFixed(2)}  - $
                    ${(
                      ((ltoAmount * 8.99) / 100) *
                      ltoToUSDExchangeRate
                    ).toFixed(2)} USD)`}
                </span>
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardCalculator;

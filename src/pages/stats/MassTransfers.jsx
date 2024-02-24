import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { getStats } from "./getStats";
import Loader from "../../components/global/Loader";

const MassTransfers = () => {
  const [massTransfer, setMassTransfer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const massTransferData = await getStats("mass_transfer");
      setMassTransfer(massTransferData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Extracting dates and counts from massTransfer data and formatting the date
  const chartData = massTransfer.map(({ period, count }) => ({
    period: period.split(" ")[0], // Splitting the period string and taking only the date part
    count,
  }));

  // Find the maximum count value
  const maxCount = Math.max(...chartData.map((item) => item.count));

  return (
    <div style={{ width: "100%" }}>
      <Card>
        {loading ? (
          <Loader />
        ) : (
          <CardContent
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: 18,
              }}
              color="primary.sec"
              gutterBottom
            >
              Mass Transfer
            </Typography>
            <LineChart
              width={700} // Setting the width to 700px
              height={300}
              data={chartData}
              style={{ margin: "auto" }}
            >
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="period" />
              <YAxis domain={[0, maxCount]} />
              <Line type="linear" dataKey="count" stroke="#ffc658" />
            </LineChart>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default MassTransfers;

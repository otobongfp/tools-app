import * as React from "react";
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

const DashboardBottom = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            minWidth: { xs: 150, sm: 300, md: 500 },
            margin: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fefeff",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontSize: 18,
              }}
              color="primary.sec"
              gutterBottom
            >
              Generators
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
              }}
              color="primary.sec"
              component="div"
            >
              $0.82
            </Typography>
            <Typography sx={{ mb: 1.5, mt: 2 }} color="primary.sec">
              (Coingecko)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            minWidth: { xs: 150, sm: 300, md: 500 },
            margin: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fefeff",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontSize: 18,
              }}
              color="primary.sec"
              gutterBottom
            >
              Nodes
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
              }}
              color="primary.sec"
              component="div"
            >
              $0.82
            </Typography>
            <Typography sx={{ mb: 1.5, mt: 2 }} color="primary.sec">
              (Coingecko)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Card
          sx={{
            minWidth: { xs: 150, sm: 300, md: 500 },
            margin: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fefeff",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontSize: 18,
              }}
              color="primary.sec"
              gutterBottom
            >
              Transactions
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
              }}
              color="primary.sec"
              component="div"
            >
              $0.82
            </Typography>
            <Typography sx={{ mb: 1.5, mt: 2 }} color="primary.sec">
              (Coingecko)
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardBottom;

import "./InfoBox.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://navbharattimes.indiatimes.com/thumb/81359545/delhi-rain-news-81359545.jpg?imgsize=54351&width=700&height=525&resizemode=75";
    const HOT_URL = "https://images.pexels.com/photos/397979/pexels-photo-397979.jpeg?auto=compress&cs=tinysrgb&w=600";
    const COLD_URL = "https://patch.com/img/cdn20/users/22994611/20231010/095104/styles/patch_image/public/snow-03___10095023688.jpg?width=1200";
    const RAIN_URL = "https://static.vecteezy.com/system/resources/previews/029/772/047/non_2x/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg";

    return (
        <div className="InfoBox">
          <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.tempMin}&deg;C</p>
                  <p>Max Temp = {info.tempMax}&deg;C</p>
                  <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
    );
}
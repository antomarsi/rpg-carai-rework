import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import swordAnimation from "@static/animations/sword_animation.json";
import Lottie, { Options } from "react-lottie";
import useStyles from './styles';

const Splash: React.FC = () => {
  const classes = useStyles();

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: swordAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.container}>
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled
          height={400}
          width={400}
        />
        <Typography variant="h4" className={classes.title}>
          Carregando dados...
          </Typography>
      </Paper>
    </Container>
  );
};

export default Splash;

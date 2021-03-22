import React, { ReactNode, useMemo } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { createStyles, makeStyles, Paper } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface LayoutProps extends RouteComponentProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100%',
      backgroundColor: theme.palette.background.paper
    },
  }),
);

const disabledHeaderPaths = ['/editor'];

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const classes = useStyles();
  const disableHeader = useMemo(() => {
    const pathName = location.pathname;

    return disabledHeaderPaths.indexOf(pathName) !== -1;
  }, [location]);

  return (
    <>
      {!disableHeader && <Sidebar />}
      <section className={classes.root}>
        {children}
      </section>
    </>
  );
};

export default withRouter(Layout);

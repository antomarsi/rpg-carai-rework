import React, { ReactNode, useMemo } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { createStyles, makeStyles, Paper } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import classNames from 'classnames';

interface LayoutProps extends RouteComponentProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3),
    },
    noPadding: { padding: theme.spacing(0) },
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
    <div className={classes.root}>
      {!disableHeader && <Sidebar />}
      <section
        className={classNames(classes.content, {
          [classes.noPadding]: disableHeader,
        })}
      >
        {children}
      </section>
    </div>
  );
};

export default withRouter(Layout);

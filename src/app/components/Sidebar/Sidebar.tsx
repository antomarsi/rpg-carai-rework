import {
  Divider,
  Drawer,
  IconButton,
  IconButtonProps,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import * as React from 'react';
import { FunctionComponent, HTMLAttributes, useMemo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import useStyles from './styles';

const tabLinks = ['/', '/browser'];

type MenuRoute = Record<string, IconButtonProps>;

const menusContainers: MenuRoute[] = [
  {
    '/': <Home fontSize='large' />,
  },
  { '/editor': <Home fontSize='large' /> },
];

interface HeaderProps
  extends RouteComponentProps,
    HTMLAttributes<HTMLDivElement> {}

const SidebarComponent: FunctionComponent<HeaderProps> = ({ location }) => {
  const classes = useStyles();
  const linkValue = useMemo(() => {
    const pathName = location.pathname;

    if (tabLinks.indexOf(pathName) !== -1) {
      return pathName;
    }

    return tabLinks[0];
  }, [location]);

  return (
    <Drawer variant='permanent' classes={{ paper: classes.drawer }}>
      {menusContainers.map((menu, index) => (
        <div key={index}>
          {Object.entries(menu).map(([path, icon]) => (
            <IconButton
              className={classes.button}
              key={path}
              disableRipple
              disabled={path === linkValue}
              onClick={() => {
                window.electron.openEditor()
              }}
            >
              {icon}
            </IconButton>
          ))}
          <Divider />
        </div>
      ))}
    </Drawer>
  );
};

export const Sidebar = withRouter(SidebarComponent);

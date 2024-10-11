import React, {useState} from 'react';

import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  Anchor,
  rem,
} from '@mantine/core';
import {Icon, IconChevronLeft, IconProps} from '@tabler/icons-react';

import classes from "./LinksGroup.module.css"
import {RoutePath} from "~/routes/routeData.tsx";

interface LinksProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  initiallyOpened?: boolean;
  onClick?: () => void;
  link: {
    label: string;
    link: RoutePath;
  }[];
}

const Links = (props: LinksProps) => {
  const {Icon, label, initiallyOpened, onClick, link} = props;
  const [opened, setOpened] = useState(initiallyOpened ?? false);

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened(o => !o)
        }}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon variant="light" size={30}>
              <Icon size="1.1rem" />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          <IconChevronLeft
            className={classes.chevron}
            stroke={1.5}
            style={{
              width: rem(16),
              height: rem(16),
              transform: opened ? 'rotate(-90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        {link.map(singleLink => (
          <Anchor
            unstyled
            className={classes.link}
            href={singleLink.link}
            onClick={onClick}
            key={singleLink.label}
          >
            {singleLink.label}
          </Anchor>
        ))}
      </Collapse>
    </>
  );
};

interface LinkProps {
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  onClick?: () => void;
  link: RoutePath;
}

const SingleLink = (props: LinkProps) => {
  const {Icon, label, onClick, link} = props;
  return (
    <Anchor
      unstyled
      href={link}
      onClick={onClick}
      className={classes.control}
    >
      <Box style={{display: 'flex', alignItems: 'center'}}>
        <ThemeIcon variant="light" size={30}>
          <Icon size="1.1rem" />
        </ThemeIcon>
        <Box ml="md">{label}</Box>
      </Box>
    </Anchor>
  );
};

export type LinksGroupProps = LinksProps | LinkProps;

export const LinksGroup: React.FC<LinksGroupProps> = props => {
  const {link, ...other} = props;
  const isLinks = Array.isArray(link);

  if (isLinks) {
    return <Links link={link} {...other} />;
  }
  return <SingleLink link={link} {...other} />;
};

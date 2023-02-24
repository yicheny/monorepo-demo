import React from 'react';
import {createUseStyles} from 'react-jss'
import clsx from "clsx";
import {createDictExe} from "../../utils";

const DIRECTION = {
    horizontal: "horizontal",
    vertical: "vertical"
}

const SIZE = {
    small: "small",
    middle: "middle",
    large: "large"
}

const useStyles = createUseStyles({
    space: ({direction}) => {
        const directionStyleMap = {
            [DIRECTION.horizontal]: {
                display: "flex",
            },
            [DIRECTION.vertical]: {
                display: "flex",
                flexDirection: "column"
            }
        }
        return createDictExe(directionStyleMap)(direction)
    },
    item: ({direction, size}) => {
        const directionStyleMap = {
            [DIRECTION.horizontal]: {
                [SIZE.small]: {
                    marginRight: 8
                },
                [SIZE.middle]: {
                    marginRight: 16
                },
                [SIZE.large]: {
                    marginRight: 24
                }
            },
            [DIRECTION.vertical]: {
                [SIZE.small]: {
                    marginBottom: 8
                },
                [SIZE.middle]: {
                    marginBottom: 16
                },
                [SIZE.large]: {
                    marginBottom: 24
                }
            }
        }
        const sizeStyleMap = createDictExe(directionStyleMap)(direction)
        return createDictExe(sizeStyleMap)(size)
    },
})

export function Space(props) {
    const {size, children} = props;
    const classes = useStyles(props)
    return (<div className={clsx(classes.space, {
        [classes.small]: size === SIZE.small,
        [classes.middle]: size === SIZE.middle,
        [classes.large]: size === SIZE.large,
    })}>
        {
            React.Children.map(children, (item) => {
                return <div className={classes.item}>
                    {item}
                </div>
            })
        }
    </div>);
}

Space.defaultProps = {
    size: SIZE.small,
    direction: DIRECTION.horizontal
}
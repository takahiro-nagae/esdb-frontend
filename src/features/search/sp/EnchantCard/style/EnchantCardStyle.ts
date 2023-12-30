import { css } from "@emotion/react";

export const enchantCard = css({
    backgroundColor: '#3C3B40',
    boxSizing: 'border-box',
    margin: '8px',
    padding: '8px',
});

export const cardBox = css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
});

export const inline = css({
    color: '#fff',
    display: 'inline',
    marginLeft: '16px',
    marginRight: '-24px',
    verticalAlign: 'middle'
});

export const title = css({
    color: '#fff',
    fontWeight: 'bold'
});

export const value = css({
    color: '#fff'
});
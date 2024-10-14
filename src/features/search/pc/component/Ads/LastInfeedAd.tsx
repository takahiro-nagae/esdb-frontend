/** @jsxImportSource @emotion/react */
import { TableCell, TableRow } from '@mui/material';
import { displayLastAd } from './function/displayAd';
import { tableContentStyle, tableDataStyle } from './style/AdsStyle';
import { InfeedAd } from '../../../../../adsense/infeedAd';

export const LastInfeedAd = (props: {
  index: number;
  dataLength: number;
  disp_val: string | undefined;
}) => {
  if (displayLastAd(props.index, props.dataLength)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.VITE_APP_ENV !== 'prod') {
      return null;
    }

    return (
      <TableRow css={tableContentStyle} key={'lastPc'}>
        <TableCell colSpan={props.disp_val ? 7 : 6} css={tableDataStyle}>
          <InfeedAd />
        </TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};

/** @jsxImportSource @emotion/react */
import { TableCell, TableRow } from '@mui/material';
import { displayAmongAd } from './function/displayAd';
import { InfeedAd } from '../../../../../adsense/infeedAd';
import { tableContentStyle, tableDataStyle } from './style/AdsStyle';

export const AmongAd = (props: {
  index: number;
  disp_val: string | undefined;
}) => {
  if (displayAmongAd(props.index)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    return (
      <TableRow css={tableContentStyle} key={props.index}>
        <TableCell colSpan={props.disp_val ? 7 : 6} css={tableDataStyle}>
          <InfeedAd />
        </TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};

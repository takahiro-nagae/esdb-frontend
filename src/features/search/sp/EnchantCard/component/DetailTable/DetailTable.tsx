/** @jsxImportSource @emotion/react */
import { Box, Collapse, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { EffectList } from "../../../../common/component/EffectList/EffectList";
import { RouteList } from "../../../../common/component/RouteList/RouteList";
import { DetailModal } from "../../../../common/component/Detail/Modal/DetailModal";
import { EnchantData } from "../../../../common/interface/enchantData";
import { acoBody, acoHead, target } from "./style/DetailTableStyle";


export const DetailTable = (props: {enchant: EnchantData, isOpen: boolean}) => {
    const omtCount = 3;
    const routeNames = props.enchant.route_name ? props.enchant.route_name.split('@') : [];

    return (
            <Collapse
                in={props.isOpen}
                timeout='auto'
                unmountOnExit
            >
                <Box sx={{ paddingBottom: 10 }}>
                    <p css={target}>
                        対象：{props.enchant.target_name}
                    </p>
                    <Table size='small'>
                        <TableBody>
                            <TableRow>
                                <TableCell css={acoHead}>効果</TableCell>
                                <TableCell css={acoBody}>
                                    <EffectList
                                        effectKbn={props.enchant.effect_kbn}
                                        effectName={props.enchant.effect_name}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell css={acoHead}>入手先</TableCell>
                                <TableCell css={acoBody}>
                                    <RouteList
                                        routeNames={ routeNames }
                                        omtCount={omtCount}
                                    />
                                    <DetailModal
                                        count={routeNames.length - omtCount}
                                        data-testid='routeModal'
                                        enchant={props.enchant}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Collapse>
    );
};
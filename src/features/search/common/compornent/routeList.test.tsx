import renderComponent from "../../../../tesetLib/render";
import React from "react";
import { RouteList } from "./routeList";
import { dispMessage, notExistTestForTestId, notExistTestForText } from "../../../../tesetLib/commonTesting";

const rendering = (enchantId: string, routeName: string) => {
    renderComponent(<RouteList enchantId={enchantId} routeName={routeName}/>);
};

describe('routeList', () => {

    const enchantID = '00000001';
    const routeNameFor3 = 'test1@test2@test3';
    const routeNameFor4 = 'test1@test2@test3@test4';
    const testID = 'routeModal';

    test('routeNameを与えない場合', () => {
        rendering(enchantID, '');
        routeNameFor3.split('@').map(str => {
            notExistTestForText(str);
        });
    });

    test('routeNameが3つ(省略が発生しない場合)', () => {
        rendering(enchantID, routeNameFor3);

        routeNameFor3.split('@').map(str => {
            dispMessage(str);
        });

        notExistTestForTestId(testID);
    });

    test('routeNameが4つ(省略が発生する場合)', () => {
        rendering(enchantID, routeNameFor4);

        routeNameFor3.split('@').map(str => {
            dispMessage(str);
        });
        // test4は省略される
        notExistTestForText('test4');

        notExistTestForTestId(testID);
    });
});
import renderComponent from "../../../tesetLib/render";
import React from "react";
import { EffectList } from "./effectList";
import { screen } from "@testing-library/react";
import { notExistTestForTestId } from "../../../tesetLib/commonTesting";

const rendering = (effectKbn: string, effectName: string) => {
    renderComponent(<EffectList effectKbn={effectKbn} effectName={effectName}/>);
}

describe('effectList', () => {

    const testId = 'effect';

    test('値が全て空', () => {
        rendering('', '');
        notExistTestForTestId(testId);
    });

    test('値を渡した時の表示及び表示順確認', async () => {
        // 本当はここで色も確認したいが複雑になるのでテストを分けた
        // 色は関数の単体テストeffectColorFunction.test.tsにて実施
        const effectKbn = 'increase@decrease@not-relevant@designated@';
        const effectName = 'test0@test1@test2@test3@test4';

        rendering(effectKbn, effectName);

        const effectNameArray = effectName.split('@');

        screen.getAllByTestId(testId).map((screenEffect, index) => {
            expect(screenEffect.textContent).toBe(effectNameArray[index]);
        });
    });
});
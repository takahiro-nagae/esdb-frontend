import renderComponent from "../../../tesetLib/render";
import { ImpText } from "./impText";
import { dispRedBoldMessage, notExistTestForText } from "../../../tesetLib/commonTesting";

const rendering = (impFlg: string) => renderComponent(<ImpText impFlg={impFlg}/>);

describe('impText', () => {

    const notImpVal = '0';
    const impVal = '1';

    const expectMessage = '未実装';

    test('エンチャントが実装されていない', () => {
        rendering(notImpVal);

        dispRedBoldMessage(expectMessage);
    });

    test('エンチャントが実装されている', () => {
        rendering(impVal);
        notExistTestForText(expectMessage);
    });
});

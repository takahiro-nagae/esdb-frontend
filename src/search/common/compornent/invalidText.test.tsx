import renderComponent from "../../../tesetLib/render";
import { InvalidText } from "./invalidText";
import { dispRedBoldMessage, notExistTestForText } from "../../../tesetLib/commonTesting";

const rendering = (invalidTargetFlg: string) => renderComponent(<InvalidText invalidTargetFlg={invalidTargetFlg}/>);

describe('invalidText', () => {

    const nonInvalid = '0';
    const invalid = '1';

    const expectMessage = '貼付不可'

    test('貼付可能', () => {
        rendering(nonInvalid);
        notExistTestForText(expectMessage);
    });

    test('貼付不可', () => {
        rendering(invalid);

        dispRedBoldMessage(expectMessage);
    });
});

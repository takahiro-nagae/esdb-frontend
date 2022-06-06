import renderComponent from "../tesetLib/render";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { AppMenu } from "./appMenu";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppMenuData } from "./data/appMenuData";


test('メニューのクリック確認', async () => {
    renderComponent(<BrowserRouter><AppMenu/></BrowserRouter>);

    const iconBtn = screen.getAllByRole('button')[0];
    await userEvent.click(iconBtn);

    const menuList = screen.getAllByRole('menuitem');

    for ( let i = 0; i < menuList.length; i++ ) {
        expect(menuList[i].textContent).toBe(AppMenuData[i].text);
    }
});
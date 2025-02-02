import { Locator, Page, expect, test } from "@playwright/test";
import ApplicationURL from "../helpers/ApplicationURL";

export default class StartPage {
    constructor(page) {
        this.page = page;
        this.map = page.locator('canvas'); 
    }

    async openPageAndWait() {
        await this.page.goto(ApplicationURL.BASE_URL);
        await this.page.waitForTimeout(10500); 
    }

    async clickOnMapByPixle(pixleX, pixleY) {
        await this.map.click({ position: { x: pixleX, y: pixleY } });
    }

    async clickOnDefaultPixles() {
        await this.map.click({ position: { x: 910, y: 108 } });
        await this.map.click({ position: { x: 900, y: 108 } });
    }
}

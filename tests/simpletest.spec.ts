// import { test, expect } from '@playwright/test';
// import * as Cesium from 'cesium';

// // הגדרת קואורדינטות אורך ורוחב
// const longitude = 36.5;
// const latitude = 33;
  
// test('Click on a location based on coordinates2', async ({ page }) => {

//     await page.goto('https://sandcastle.cesium.com/standalone.html#c=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');

//     await page.waitForTimeout(50000);

//     // const window = await page.locator("window")

//     const pixelPosition = await page.evaluate(({ longitude, latitude }) => {

//         //  const window = page.locator("window");      

//         const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);
//         const viewer = window.viewer;
//         const scene = viewer.scene;
//         const windowPosition = scene.cartesianToCanvasCoordinates(cartesian);

//         return {
//             x: windowPosition.x,
//             y: windowPosition.y,
//         };
//     }, { longitude, latitude });


//     console.log('Pixel Position:', pixelPosition);
//     // לחיצה על הפיקסל במפה
//     const mapCanvas = await page.locator('canvas');
//     await mapCanvas.click({ position: { x: pixelPosition.x, y: pixelPosition.y } });

// });

// // // גישה ל-iframe
// // const iframeLocator = page.locator('#bucketFrame');
// // await iframeLocator.waitFor(); // המתנה לטעינת iframe

// // const iframe = await iframeLocator.contentFrame();
// // // expect(iframe).not.toBeNull(); // בדיקה שה-iframe לא ריק
// // await page.waitForTimeout(20000);

// // // המתנה ל-canvas
// // const canvasLocator = iframe!.locator('canvas');
// // await canvasLocator.waitFor(); // המתנה לטעינת canvas

// // // בדיקה שה-canvas קיים ונראה
// // const isCanvasVisible = await canvasLocator.isVisible();
// // expect(isCanvasVisible).toBe(true); // בדיקה שה-canvas נראה
// // console.log('Canvas is visible and ready for interaction.');

// // // המרת קואורדינטות לפיקסלים
// // const pixelPosition = await canvasLocator.evaluate((canvas, { longitude, latitude }) => {
// //     const viewer = window['viewer']; // יש לוודא שה-viewer מוגדר ב-window
// //     if (!viewer) {
// //     throw new Error('Viewer is not defined in the window scope.');
// //     }

// //     // המרת קואורדינטות אורך ורוחב ל-Cartesian3
// //     const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);

// //     // המרת המיקום ב-Cartesian3 לפיקסלים במפה
// //     const scene = viewer.scene;
// //     const windowPosition = scene.camera.worldToScreen(cartesian);

// //     // אם הצלחנו להמיר את המיקום לפיקסל, נחזיר את המיקום על המסך
// //     if (windowPosition) {
// //     return {
// //         x: windowPosition.x,
// //         y: windowPosition.y,
// //     };
// //     }
// //     return null;
// // }, { longitude, latitude });

// // // בדיקה אם קיבלנו מיקום בפיקסלים
// // expect(pixelPosition).not.toBeNull();
// // console.log('Pixel Position:', pixelPosition);

// // // לחץ על המיקום בפיקסלים במפה
// // await canvasLocator.click({ position: pixelPosition! });

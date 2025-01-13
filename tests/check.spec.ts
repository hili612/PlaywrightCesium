// import { test, expect } from '@playwright/test';
// import * as Cesium from 'cesium';

// // test('Access iframe and ensure it loads', async ({ page }) => {
// //   await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
// //   await page.waitForTimeout(60000);

// //    // המתן שה-iframe ייטען
// //    const iframeElement = await page.locator('#bucketFrame');
// //    await expect(iframeElement).toBeVisible();
 
// //    // ניגש לתוכן ה-iframe
// //    const iframe = await iframeElement.contentFrame();
// //    expect(iframe).not.toBeNull();
// // });

// // test('Click on "Draw Point with Label" button', async ({ page }) => {
// //     await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
// //     await page.waitForTimeout(60000);

// //     // ניגש ל-iframe
// //     const iframeElement = await page.locator('#bucketFrame');
// //     const iframe = await iframeElement.contentFrame();
  
// //     // נמצא את כפתור הוספת הישות (אם יש לו טקסט או מזהה ספציפי, אפשר להשתמש בזה)
// //     const button = await iframe.locator('text=Draw Point with Label');
// //   });


// //   test('Click on a location based on coordinates', async ({ page }) => {
// //     await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
// //     await page.waitForTimeout(60000);
// //     // הגדרת קואורדינטות אורך ורוחב
// //     const longitude = 36.5;
// //     const latitude = 33;
  
// //     // גישה ל-iframe
// //     const iframeElement = await page.locator('#bucketFrame');
// //     const iframe = await iframeElement.contentFrame();
// //     expect(iframe).not.toBeNull();
// //     await page.waitForTimeout(50000);
  
// //     const pixelPosition = await iframe.locator('canvas').evaluate((canvas, { longitude, latitude }) => {
// //         const viewer = window['viewer']; // שים לב שה-Viewer צריך להיות מוגדר ב-Cesium
        
// //         // המרת קואורדינטות אורך ורוחב ל-Cartesian3
// //         const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);
        
// //         // המרת המיקום ב-Cartesian3 לפיקסלים במפה
// //         const scene = viewer.scene;
// //         const windowPosition = scene.camera.worldToScreen(cartesian);
// //         // אם הצלחנו להמיר את המיקום לפיקסל, נחזיר את המיקום על המסך
// //     if (windowPosition) {
// //         return {
// //           x: windowPosition.x,
// //           y: windowPosition.y,
// //         };
// //       }
// //       return null;
// //     }, { longitude, latitude });
  
// //     // בדיקה אם קיבלנו מיקום בפיקסלים
// //     expect(pixelPosition).not.toBeNull();
// //     console.log('Pixel Position:', pixelPosition);
// //   });


//   test('Click on a location based on coordinates2', async ({ page }) => {
//     // גישה לכתובת ה-URL והמתנה לטעינת הדף
//     await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
//     await page.waitForLoadState('load'); // המתנה לטעינת הדף
  
//     // הגדרת קואורדינטות אורך ורוחב
//     const longitude = 36.5;
//     const latitude = 33;
  
//     // גישה ל-iframe
//     const iframeLocator = page.locator('#bucketFrame');
//     await iframeLocator.waitFor(); // המתנה לטעינת iframe

//     page.getByRole('tab', { name: 'Entity' }).click()
//     await page.waitForTimeout(60000);
//     page.getByRole('tab', { name: 'Entity' }).click()
//     await page.waitForTimeout(40000);
//     page.getByRole('tab', { name: 'Entity' }).click()

//     const iframe = await iframeLocator.contentFrame();
//     // expect(iframe).not.toBeNull(); // בדיקה שה-iframe לא ריק
//     await page.waitForTimeout(20000);
  
//     // המתנה ל-canvas
//     const canvasLocator = iframe!.locator('canvas');
//     await canvasLocator.waitFor(); // המתנה לטעינת canvas
  
//     // בדיקה שה-canvas קיים ונראה
//     const isCanvasVisible = await canvasLocator.isVisible();
//     expect(isCanvasVisible).toBe(true); // בדיקה שה-canvas נראה
//     console.log('Canvas is visible and ready for interaction.');
  
//     // המרת קואורדינטות לפיקסלים
//     const pixelPosition = await canvasLocator.evaluate((canvas, { longitude, latitude }) => {
//       const viewer = window['viewer']; // יש לוודא שה-viewer מוגדר ב-window
//       if (!viewer) {
//         throw new Error('Viewer is not defined in the window scope.');
//       }
  
//       // המרת קואורדינטות אורך ורוחב ל-Cartesian3
//       const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);
  
//       // המרת המיקום ב-Cartesian3 לפיקסלים במפה
//       const scene = viewer.scene;
//       // const windowPosition = scene.camera.worldToScreen(cartesian);
  
//       // אם הצלחנו להמיר את המיקום לפיקסל, נחזיר את המיקום על המסך
//       if (windowPosition) {
//         return {
//           x: windowPosition.x,
//           y: windowPosition.y,
//         };
//       }
//       return null;
//     }, { longitude, latitude });
  
//     // בדיקה אם קיבלנו מיקום בפיקסלים
//     expect(pixelPosition).not.toBeNull();
//     console.log('Pixel Position:', pixelPosition);
  
//     // לחץ על המיקום בפיקסלים במפה
//     await canvasLocator.click({ position: pixelPosition! });
//   });

// //   test('3', async ({ page }) => {
// //     await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
  
// //     // הגדרת קואורדינטות אורך ורוחב
// //     const longitude = 36.5;
// //     const latitude = 33;
  
// //     // גישה ל-iframe
// //     const iframeElement = await page.locator('#bucketFrame');
// //     const iframe = await iframeElement.contentFrame();
// //     expect(iframe).not.toBeNull();
  
// //     // הגדרת ה-locator עבור ה-canvas
// //     const canvasLocator = iframe.locator('canvas');
  
// //     // המתנה לטעינת ה-canvas עם מגבלת זמן של 10 שניות
// //     await canvasLocator.waitFor({ state: 'visible'});
  
// //     // בדיקה אם ה-canvas נראה
// //     const isCanvasVisible = await canvasLocator.isVisible();
// //     expect(isCanvasVisible).toBeTruthy();
  
// //     // אם ה-canvas נראה, ממשיכים לפעולה
// //     const pixelPosition = await canvasLocator.evaluate((canvas, { longitude, latitude }) => {
// //       const viewer = window['viewer']; // הנחה שה-Viewer מוגדר ב-Cesium
  
// //       // המרת קואורדינטות ל-Cartesian3
// //       const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);
  
// //       // המרת המיקום ל-pixel position
// //       const scene = viewer.scene;
// //       const windowPosition = scene.camera.worldToScreen(cartesian);
  
// //       // החזרת המיקום אם הוא קיים
// //       if (windowPosition) {
// //         return { x: windowPosition.x, y: windowPosition.y };
// //       }
// //       return null;
// //     }, { longitude, latitude });
  
// //     // בדיקה אם התקבל מיקום פיקסל תקין
// //     expect(pixelPosition).not.toBeNull();
// //     console.log('Pixel Position:', pixelPosition);
  
// //     // סימולציית קליק על הפיקסל
// //     if (pixelPosition) {
// //       await page.mouse.click(pixelPosition.x, pixelPosition.y);
// //       console.log('Clicked on the location successfully!');
// //     }
// //   });
  
  

  


// import { test, expect } from '@playwright/test';
// import * as Cesium from 'cesium';

// test('get started link', async ({ page }) => {
//   await page.goto('https://sandcastle.cesium.com/?src=Clamp%20Entities%20to%20Ground.html&label=Entity', { timeout: 60000 });
//   await page.waitForTimeout(60000);

//   const latitude = 33;
//   const longitude = 36.5;

//   // מצא את האלמנט של ה-Canvas
//   const canvasHandle = await page.$('.cesium-widget canvas'); // יש להתאים את הסלקטור בהתאם לאתר שלך
//   if (!canvasHandle) throw new Error('Canvas element not found');

//   // הפעלת קוד בתוך הדפדפן כדי להמיר את הקורדינטות לקורדינטות פיקסל
//   const pixelCoordinates = await page.evaluate(
//     ({ lat, lng }) => {
//       const viewer = window['viewer']; // או הגדרה לפי הצורך
//       if (!viewer) throw new Error('Viewer not found');

//       // המרה של קורדינטות גיאוגרפיות (lat/lng) לקורדינטות מסך (pixels)
//       const cartesian = Cesium.Cartesian3.fromDegrees(lng, lat);
//       const scene = viewer.scene;
//       const screenSpacePosition = Cesium.SceneTransforms.worldToWindowCoordinates(
//         scene,
//         cartesian
//       );
//       return screenSpacePosition;
//     },
//     { lat: latitude, lng: longitude } // העברת נתונים כחלק מהארגומנט
//   );

//   console.log('Pixel Coordinates:', pixelCoordinates);
// });

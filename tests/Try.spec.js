import { test } from '@playwright/test';
import * as Cesium from 'cesium';
import StartPage from "../pages/StartPage";

// הגדרת קואורדינטות אורך ורוחב
const longitude = 36.5;
const latitude = 33;

let startPage;

test.beforeEach(async ({ page }) => {
    startPage = new StartPage(page);
    await startPage.openPageAndWait();
});
  
test('Click on a location based on coordinates', async ({ page }) => {

    const pixelPosition = await page.evaluate(({ longitude, latitude }) => {  
        
        const cartesian = Cesium.Cartesian3.fromDegrees(longitude, latitude);
        console.log(cartesian);
        const viewer = window.viewer;
        if (!viewer) {
            console.error("Viewer is not initialized.");
            return;
        }  
        const scene = viewer.scene;
        const windowPosition = scene.cartesianToCanvasCoordinates(cartesian);
        return {
            x: windowPosition.x,
            y: windowPosition.y,
        };
    }, { longitude, latitude });


    console.log('Pixel Position:', pixelPosition);
    // לחיצה על הפיקסל במפה
    const mapCanvas = await page.locator('canvas');
    await mapCanvas.click({ position: { x: pixelPosition.x, y: pixelPosition.y } });

});

test('ZOOM', async ({ page }) => {
    await page.evaluate(() => {  
        
        const viewer = window.viewer;
        if (!viewer) {
            console.error("Viewer is not initialized.");
            return;
        }
        const scene = viewer.scene;
        const camera = scene.camera;
        const zoomHeight = 1000; 
        camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, zoomHeight)
        });
        

    });

    await page.waitForTimeout(10000);

});

test('DRAG', async ({ page }) => {

    const source = page.locator('canvas'); // האלמנט שגוררים
    const target = page.locator('canvas'); // יעד הגרירה
    await source.dragTo(target, {
    sourcePosition: { x: 910, y: 108 }, // מיקום בתוך האלמנט
    targetPosition: { x: 710, y: 198 }, // יעד בתוך האלמנט
    });
    await page.waitForTimeout(10000);

});

test('Get Number Of entities', async ({ page }) => {
    // לחיצה על פיקסלים במפה
    const mapCanvas = await page.locator('canvas');
    await mapCanvas.click({ position: { x: 910, y: 108 } });
    await mapCanvas.click({ position: { x: 900, y: 108 } });
    await page.waitForTimeout(500);

    const entityCount = await page.evaluate(() => {
        const entities = window.viewer.entities._entities._array;
        return entities.length;
      });
      
    console.log(`Number of entities: ${entityCount}`);
});

test('Get Entities Details', async ({ page }) => {
    // לחיצה על הפיקסל במפה
    await page.locator('canvas').click({ position: { x: 910, y: 108 } });
    await page.waitForTimeout(1000);

    const entityDetails = await page.evaluate(() => {  
        const viewer = window.viewer;
        const entities = viewer.entities._entities._array;;
        // החזרת מידע על כל הישויות
        return entities.map(entity => ({
            id: entity._id,
            name: entity._name || 'Unnamed',
            // position: { lat: position.latitude, lon: position.longitude }
        }));
    });
    console.log("Entities Data:", entityDetails);
});

test('Get Entity Position***', async ({ page }) => {
    // לחיצה על הפיקסל במפה
    const mapCanvas = await page.locator('canvas');
    await mapCanvas.click({ position: { x: 910, y: 108 } });
    await page.getByRole('button', { name: 'View Home' }).click();
    await page.waitForTimeout(500);

    await page.evaluate(() => {
    // const entity = window.viewer.entities.getById('your-entity-id');
    const entity = window.viewer.entities._entities._array[0];
    const position = entity._position._value;

    // המרה מ-Cartesian3 ל-Longitude, Latitude ו-Altitude
    const cartographic = Cesium.Cartographic.fromCartesian(position);
    const latitude = Cesium.Math.toDegrees(cartographic.latitude);
    const longitude = Cesium.Math.toDegrees(cartographic.longitude);
    const altitude = cartographic.height;

    // הדפסת Latitude, Longitude, ו-Altitude
    console.log("Latitude:", latitude, "Longitude:", longitude, "Altitude:", altitude);

    // המרה לפיקסלים במסך
    const scene = window.viewer.scene;
    const canvasCoordinates = scene.cartesianToCanvasCoordinates(position);

        console.log("Pixel Coordinates:", "X:", canvasCoordinates.x, "Y:", canvasCoordinates.y);
    });
      
});




// ה-map הוא פונקציה של מערכים ב-JavaScript,
//  אשר מאפשרת לעבור על כל איבר במערך ולבצע פעולה כלשהי על כל אחד מהם. 
// כל איבר שעובר דרך ה-map
//  מוחזר עם שינוי או עיבוד מסוים, והפונקציה מחזירה מערך חדש עם התוצאות.
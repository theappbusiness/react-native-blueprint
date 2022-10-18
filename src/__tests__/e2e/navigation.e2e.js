describe('E2E Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the correct launching screen', async () => {
    await expect(element(by.id('CaseStudiesScreen'))).toExist();
    await expect(element(by.text('KIN + CARTA'))).toBeVisible();
  });

  it('should go the case study details upon tapping', async () => {
    await element(by.id('CaseStudyCard')).atIndex(0).tap();
    await expect(element(by.id('CaseStudyDetails'))).toBeVisible();
  });

  it('should go back when the back button is pressed', async () => {
    await element(by.id('CaseStudyCard')).atIndex(1).tap();
    await element(by.text('Back')).tap();
    await expect(element(by.id('CaseStudiesScreen'))).toBeVisible();
  });
});

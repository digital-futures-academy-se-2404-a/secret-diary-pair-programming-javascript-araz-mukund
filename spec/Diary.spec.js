import Diary from "../src/Diary.js";

describe("Secret Diary Tests", () => {
  describe("Unlock diary with pin", () => {
    it("should set the isLocked property to false if the entered PIN matches the value of the pin property", () => {
			// Arrange
			let pin = 8976
      let myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(pin);
      let isLocked = myDiary.getIsLocked();
      // Assert
      expect(isLocked).toBeFalse();
      // assertTrue(testWallet instanceof Wallet);
    });
  });
});

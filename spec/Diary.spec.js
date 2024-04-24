import Diary from "../src/Diary.js";

describe("Secret Diary Tests", () => {
  describe("Unlock diary with pin", () => {
    it("should set the isLocked property to false if the entered PIN matches the value of the pin property", () => {
      // Arrange
      let pin = 8976;
      let myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(pin);
      let isLocked = myDiary.getIsLocked();
      // Assert
      expect(isLocked).toBeFalse();
      // assertTrue(testWallet instanceof Wallet);
    });
  });
  describe("Unlock diary with pin", () => {
    it("should set the isLocked property to false if the entered PIN matches the value of the pin property", () => {
      // Arrange
      let pin = 8976;
      let wrongPin = 1234;
      let myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(wrongPin);
      let isLocked = myDiary.getIsLocked();
      // Assert
      expect(isLocked).toBeTrue();
      // assertTrue(testWallet instanceof Wallet);
    });
  });
  describe("Unlock diary with pin", () => {
    it("should allow ", () => {
      // Arrange
      let pin = 8976;
      let myDiary = new Diary(pin);
      // Act
			myDiary.enterPin(pin);
			myDiary.addEntry("Entry 1")
			let actual = myDiary.getEntries[0]
      // Assert
      expect(actual).toBe("Entry 1");
      // assertTrue(testWallet instanceof Wallet);
    });
  });
});

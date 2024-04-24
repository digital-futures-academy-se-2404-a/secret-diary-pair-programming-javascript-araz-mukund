import Diary from "../src/Diary.js";


describe("Secret Diary Tests", () => {
  describe("Unlock diary with pin", () => {
    it("should set the isLocked property to false if the entered PIN matches the value of the pin property", () => {
      // Arrange
      const pin = 8976;
      const myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(pin);
      const isLocked = myDiary.getIsLocked();
      // Assert
      expect(isLocked).toBeFalsy();
    });

    it("should keep the isLocked property true if the entered PIN doesn't match the value of the pin property", () => {
      // Arrange
      const correctPin = 8976;
      const wrongPin = 1234;
      const myDiary = new Diary(correctPin);
      // Act
      myDiary.enterPin(wrongPin);
      const isLocked = myDiary.getIsLocked();
      // Assert
      expect(isLocked).toBeTruthy();
    });
  });

  describe("Add entries to unlocked diary", () => {
    it("should add a new entry to the diary when it's unlocked", () => {
      // Arrange
      const pin = 8976;
      const myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(pin);
      myDiary.addEntry("Entry 1");
      const actual = myDiary.getEntries()[0];
      // Assert
      expect(actual).toBe("Entry 1");
    });

    it("should show all entries in the diary", () => {
      // Arrange
      const pin = 8976;
      const myDiary = new Diary(pin);
      // Act
      myDiary.enterPin(pin);
      myDiary.addEntry("Entry 1");
      myDiary.addEntry("Entry 2");
      myDiary.addEntry("Entry 3");
      const actual = myDiary.getEntries().join(", ");
      // Assert
      expect(actual).toBe("Entry 1, Entry 2, Entry 3");
    });
  });
});

class Diary {
  #pin;
  #isLocked = true;
  #entries = []

  constructor(pin) {
    this.#pin = pin;
  }

  enterPin(pin) {
    if (pin == this.#pin) {
      this.#isLocked = false;
    }
  }

  getEntries() {
    const myEntries = [...this.#entries]
    return myEntries
               }


    addEntry(entry) {
      this.#entries.push(entry)
                    }
  
  
  getIsLocked() {
    if (this.#isLocked === true) {
      return true;
    } else {
      return false;
    }
  }
}

export default Diary;

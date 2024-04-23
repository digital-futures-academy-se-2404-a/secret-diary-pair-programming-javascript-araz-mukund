class Diary {
	#pin
	#isLocked = true

	constructor(pin) {
		this.#pin = pin
	}

	enterPin(pin) {
		if (pin == this.#pin) {
			this.#isLocked = false
		}
	}

	getIsLocked() {
		if (this.#isLocked === true) {
			return true
		} else {
			return false
		}
}

}

export default Diary

class Counter {
  static refs = {
    counterRef: document.querySelector("#counter"),
    control: {
      decrement: document.querySelector("#counter").firstElementChild,
      increment: document.querySelector("#counter").lastElementChild,
    },
    value: document.querySelector("#value"),
  };

  constructor(value) {
    this.value = value;
  }

  decrement() {
    this.value -= 1;
    this.updateValueUI();
  }
  increment() {
    this.value += 1;
    this.updateValueUI();
  }

  eventListener() {
    const {
      control: { decrement, increment },
    } = Counter.refs;

    decrement.addEventListener("click", this.decrement.bind(this));
    increment.addEventListener("click", this.increment.bind(this));
  }
  updateValueUI() {
    const { value } = Counter.refs;
    value.textContent = this.value;
  }
}

const counterValue = new Counter(0);
counterValue.eventListener();
console.log(counterValue);

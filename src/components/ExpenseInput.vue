<script>
export default {
  props: ["costs", "index", "numberOfInputs"],
  emits: ["update:costs", "addExpenseInput", "removeExpenseInput"],
  data() {
    return {
      discount: 0,
      calculatedDiscount: 0,
      showDiscountInput: false,
      showLabel: true,
      inputCount: this.numberOfInputs,
    };
  },
  methods: {
    calculateDiscount() {
      this.calculatedDiscount = (this.costs - (this.costs / 100) * this.discount).toFixed(2);
      this.discount = 0;
      this.showDiscountInput = false;
    },
    toggleDiscountInput() {
      this.showDiscountInput = !this.showDiscountInput;
      if (this.showDiscountInput) {
        this.focusOnDiscountInput();
      }
    },
    focusOnDiscountInput() {
      this.$nextTick(() => {
        this.$refs.discountInput.focus();
      });
    },
  },
  watch: {
    calculatedDiscount: {
      handler() {
        this.$emit("update:costs", this.calculatedDiscount);
      },
    },
    inputCount: {
      handler() {
        this.showLabel = this.inputCount > 1 ? false : true;
      },
    },
  },
};
</script>

<template>
  <section>
    <label for="expense-input" v-if="this.inputCount == 1" class="text-xl font-light inline-block mb-2"><slot></slot></label>
    <div class="form-input add-discount" v-if="showDiscountInput">
      <div class="left-decorator">
        <font-awesome-icon icon="fa-solid fa-percent" />
      </div>
      <input
        type="number"
        min="0"
        max="100"
        ref="discountInput"
        v-model.number="discount"
        class="has-right-decorator has-left-decorator"
        placeholder="Rabatt eingeben"
      />
      <button
        @click="calculateDiscount"
        class="btn right-decorator"
        title="Rabatt hinzufügen"
      >
        <font-awesome-icon icon="fa-solid fa-check" />
      </button>
    </div>
    <div class="form-input">
      <div class="left-decorator">
        <font-awesome-icon icon="fa-solid fa-euro-sign" />
      </div>
      <input
        type="number"
        min="0"
        placeholder="Ausgabe"
        class="has-right-decorator has-left-decorator"
        :value="costs"
        @input="$emit('update:costs', $event.target.value)"
      />
      <button
        class="btn right-decorator"
        title="Ausgabe löschen"
        v-if="this.inputCount > 1"
        @click="$emit('removeExpenseInput', index)"
      >
        <font-awesome-icon icon="fa-solid fa-minus" />
      </button>
      <button
        @click="$emit('addExpenseInput')"
        class="btn right-decorator"
        title="Ausgabe hinzufügen"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
      <button
        @click="toggleDiscountInput"
        class="btn right-decorator"
        title="Füge einen Rabatt hinzu"
      >
        <font-awesome-icon icon="fa-solid fa-percent" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.form-input {
  display: flex;
  align-items: stretch;
  margin-bottom: 0.5rem;
}
.form-input:not(.add-discount) {
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6f7264;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #6f7264;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.has-right-decorator {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
}
.has-left-decorator {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.right-decorator {
  padding: 0.5rem 0.75rem;
  border: 1px solid #6f7264;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
  border-radius: 0%;
}
.right-decorator:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.left-decorator {
  padding: 0.5rem 0.75rem;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border: 1px solid #6f7264;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -1px;
}
.btn {
  font-size: 1.5rem;
  cursor: pointer;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #454545;
  opacity: 0.5; /* Firefox */
}
</style>
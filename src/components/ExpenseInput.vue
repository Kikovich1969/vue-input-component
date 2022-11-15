<script>
export default {
  props: ["expense", "index", "hideRemoveButton"],
  emits: ["update:expense", "addExpenseInput", "removeExpenseInput"],
  data() {
    return {
      discount: 0,
      calculatedDiscount: 0,
      showDiscountInput: false,
    };
  },
  methods: {
    calculateDiscount() {
      this.calculatedDiscount = (this.expense - (this.expense / 100) * this.discount).toFixed(2);
      this.discount = 0;
      this.showDiscountInput = false;
    },
    toggleDiscountInput() {
      this.showDiscountInput = !this.showDiscountInput;
    },
  },
  watch: {
    calculatedDiscount: {
      handler() {
        this.$emit("update:expense", this.calculatedDiscount);
      },
    },
  },
};
</script>

<template>
  <section>
    <div v-if="showDiscountInput">
      <input
        type="number"
        v-model.number="discount"
      />
      <button @click="calculateDiscount">Add discount</button>
    </div>
    <div>
      <input
        type="number"
        :value="expense"
        @input="$emit('update:expense', $event.target.value)"
      />
      <button @click="$emit('addExpenseInput')">Add Expense</button>
      <button
        v-if="!hideRemoveButton"
        @click="$emit('removeExpenseInput', index)"
      >
        Remove Expense
      </button>
      <button @click="toggleDiscountInput">Discount</button>
    </div>
  </section>
</template>
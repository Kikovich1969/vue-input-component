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
      this.calculatedDiscount = (
        this.expense -
        (this.expense / 100) * this.discount
      ).toFixed(2);
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
      <input type="number" v-model.number="discount" />
      <button @click="calculateDiscount"><font-awesome-icon icon="fa-solid fa-square-check" size="lg" /></button>
    </div>
    <div>
      <input
        type="number"
        :value="expense"
        @input="$emit('update:expense', $event.target.value)"
      />
      <button @click="$emit('addExpenseInput')">
        <font-awesome-icon icon="fa-solid fa-square-plus" size="lg" />
      </button>
      <button
        v-if="!hideRemoveButton"
        @click="$emit('removeExpenseInput', index)"
      >
        <font-awesome-icon icon="fa-solid fa-square-minus" size="lg" />
      </button>
      <button @click="toggleDiscountInput">
        <font-awesome-icon icon="fa-solid fa-percent" size="lg" />
      </button>
    </div>
  </section>
</template>
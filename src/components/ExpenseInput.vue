<script>
export default {
  props: ["expense", "index", "hideRemoveButton"],
  emits: ["update:expense", "addExpenseInput", "removeExpenseInput"],
  data() {
    return {
      discount: null,
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
      this.discount = null;
      this.showDiscountInput = false;
    },
    toggleDiscountInput() {
      this.showDiscountInput = !this.showDiscountInput;
      if(this.showDiscountInput){
        this.focusOnDiscountInput();
      }
    },
    focusOnDiscountInput() {
      this.$nextTick(() => {
        console.log(this.$refs);
        this.$refs.discountInput.focus();
      });
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
    <div class="form-input add-discount" v-if="showDiscountInput">
      <div class="left-decorator">
        <font-awesome-icon icon="fa-solid fa-percent" size="lg" />
      </div>
      <input
        type="number"
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
        <font-awesome-icon icon="fa-solid fa-check" size="lg" />
      </button>
    </div>
    <div class="form-input">
      <div class="left-decorator">
        <font-awesome-icon icon="fa-solid fa-euro-sign" size="lg" />
      </div>
      <input
        placeholder="Ausgabe"
        class="has-right-decorator has-left-decorator"
        type="number"
        :value="expense"
        @input="$emit('update:expense', $event.target.value)"
      />
      <button
        @click="$emit('addExpenseInput')"
        class="btn right-decorator"
        title="Ausgabe hinzufügen"
      >
        <font-awesome-icon icon="fa-solid fa-plus" size="lg" />
      </button>
      <button
        class="btn right-decorator"
        title="Ausgabe löschen"
        v-if="!hideRemoveButton"
        @click="$emit('removeExpenseInput', index)"
      >
        <font-awesome-icon icon="fa-solid fa-minus" size="lg" />
      </button>
      <button
        @click="toggleDiscountInput"
        class="btn right-decorator"
        title="Füge einen Rabatt hinzu"
      >
        <font-awesome-icon icon="fa-solid fa-percent" size="lg" />
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
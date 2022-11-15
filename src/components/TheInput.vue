<script>
export default {
  props: ["expenseInput"],
  emits: ["update:expenseInput"],
  methods: {
    evaluateDiscount(){
        if(this.sum === 0 || this.sum === undefined || this.sum === null) return;
        this.sum = (this.sum - ((this.sum / 100) * 25)).toFixed(2);
        this.$emit('update:expenseInput', this.sum);
    }
  },
  data() {
    return {
      sum: this.expenseInput,
    };
  },
  watch: {
    expenseInput(){
        this.sum = this.expenseInput;
    }
  },
};
</script>

<template>
  <div>
    <h1>Child component</h1>
    <input
      type="number"
      :value="expenseInput"
      @input="$emit('update:expenseInput', $event.target.value)"
    />
    <button @click="evaluateDiscount">Discount 25%</button>
    <p>Summe: {{ sum }}</p>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  border: 1px solid #505050;
  width: 300px;
  margin-bottom: 2rem;
}
</style>
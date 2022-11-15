<script>
import TheTest from "./components/TheTest.vue";

export default {
  components: { TheTest },
  data() {
    return {
      expenses: [
        { amount: 0, id: 0 },
      ],
      evaluatedResult: 0,
      nextId: 1,
    };
  },
  watch: {
    expenses: {
      handler(){
        console.log('Expenses changed!');
        this.evaluateResult();
      },
      deep: true
    },
  },
  methods: {
    evaluateResult(){
      this.evaluatedResult = 0;
      this.expenses.forEach(element => {
        this.evaluatedResult = this.evaluatedResult + element.amount;
      });
    },
    addExpenseInput(){
      this.expenses.push({amount: 0, id: this.nextId++});
    },
    removeExpenseInput(index){
      this.expenses.splice(index, 1);
    }
  }
};
</script>

<template>
  <div>
    <the-test
      v-for="(expense, index) in expenses"
      v-model:expense.number="expense.amount"
      :key="expense.id"
      :index="index"
      @add-button="addExpenseInput"
      @remove-button="removeExpenseInput"
    ></the-test>
    <p>{{ evaluatedResult }}</p>
  </div>
</template>

<style scoped>
#parent {
  padding: 1rem;
  width: 300px;
  border: 1px solid #505050;
}
</style>
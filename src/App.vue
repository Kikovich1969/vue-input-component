<script>
import ExpenseInput from "./components/ExpenseInput.vue";

export default {
  components: { ExpenseInput },
  data() {
    return {
      expenses: [
        { amount: 0, id: 0 },
      ],
      evaluatedResult: 0,
      nextId: 1,
      inputCount: 1,
      isOnlyOneInput: true,
    };
  },
  watch: {
    expenses: {
      handler(){
        this.inputCount = this.expenses.length;
        this.evaluateResult();
      },
      deep: true
    },
    inputCount: {
      handler(){
        if(this.inputCount <= 1){
          this.isOnlyOneInput = true;
        } else {
          this.isOnlyOneInput = false;
        }
      }
    }
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
    <expense-input
      v-for="(expense, index) in expenses"
      v-model:expense.number="expense.amount"
      :key="expense.id"
      :index="index"
      :hideRemoveButton="isOnlyOneInput"
      @add-expense-input="addExpenseInput"
      @remove-expense-input="removeExpenseInput"
    ></expense-input>
    <p>Summe: {{ evaluatedResult }}</p>
  </div>
</template>

<style scoped>
#parent {
  padding: 1rem;
  width: 300px;
  border: 1px solid #505050;
}
</style>
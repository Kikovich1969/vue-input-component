<script>
import TheHeader from "./components/TheHeader.vue";
import ExpenseInput from "./components/ExpenseInput.vue";

export default {
  components: { ExpenseInput, TheHeader },
  data() {
    return {
      expenses: [{ amount: null, id: 0 }],
      evaluatedResult: 0,
      nextId: 1,
      inputCount: 1,
      isOnlyOneInput: true,
    };
  },
  watch: {
    expenses: {
      handler() {
        this.inputCount = this.expenses.length;
        this.evaluateResult();
      },
      deep: true,
    },
    inputCount: {
      handler() {
        this.isOnlyOneInput = (this.inputCount <= 1) ? true : false;
      },
    },
    evaluatedResult: {
      handler(oldValue, newValue) {
        console.log(newValue);
        console.log(oldValue);
        //this.evaluatedResult = newValue.toFixed(2);
      },
    },
  },
  methods: {
    evaluateResult() {
      this.evaluatedResult = 0;
      this.expenses.forEach((element) => {
        this.evaluatedResult = this.evaluatedResult + element.amount;
      });
    },
    addExpenseInput() {
      this.expenses.push({ amount: null, id: this.nextId++ });
    },
    removeExpenseInput(index) {
      this.expenses.splice(index, 1);
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <h2>Gemeinsame Ausgaben:</h2>
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
    <p><strong>Summe</strong>: {{ evaluatedResult }} Euro</p>
  </div>
</template>

<style>
body {
  background-color: #eaf2cd;
  color: #6f7264;
  font-family: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
  height: 100vh;
}
#parent {
  padding: 1rem;
  width: 300px;
  border: 1px solid #505050;
}
</style>
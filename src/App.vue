<script>
import TheHeader from "./components/TheHeader.vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import CategorySelect from "./components/CategorySelect.vue";

export default {
  components: { ExpenseInput, TheHeader, CategorySelect },
  data() {
    return {
      expenses: [{ amount: null, id: 0 }],
      expenses_zinka: [{ amount: null, id: 0 }],
      evaluatedResult: 0,
      nextId: 1,
      inputCount: 1,
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
    evaluatedResult: {
      handler(oldValue, newValue) {
        console.log(newValue);
        console.log(oldValue);
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
  <div>
    <category-select>Kategorie</category-select>
    <expense-input
      v-for="(expense, index) in expenses"
      v-model:expense.number="expense.amount"
      :key="expense.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput"
      @remove-expense-input="removeExpenseInput"
    >Gemeinsame Ausgaben</expense-input>

    <expense-input
      v-for="(expense_zinka, index) in expenses_zinka"
      v-model:expense_zinka.number="expense_zinka.amount"
      :key="expense_zinka.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput"
      @remove-expense-input="removeExpenseInput"
    >Ausgaben Schmetterling</expense-input>

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
label {
  font-size: 1.25rem;
  font-weight: 300;
  display: inline-block;
  margin-bottom: 0.5rem;
}
</style>
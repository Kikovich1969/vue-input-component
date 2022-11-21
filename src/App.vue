<script>
import TheHeader from "./components/TheHeader.vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import CategorySelect from "./components/CategorySelect.vue";

export default {
  components: { ExpenseInput, TheHeader, CategorySelect },
  data() {
    return {
      expenses: {
        both: [{ amount: null, id: 0 }],
        zinka: [{ amount: null, id: 0 }],
        chris: [{ amount: null, id: 0 }],
      },
      evaluatedResult: 0,
      nextId: 1,
      inputCount: 1,
    };
  },
  watch: {
    expenses: {
      handler(newValue) {
        /* console.log("Changed!");
        console.log(newValue); */
        this.evaluateResult(newValue);
      },
      deep: true,
    },
  },
  computed: {},
  methods: {
    evaluateResult(newValue) {
      this.evaluatedResult = 0;
      console.log(newValue);
      for(expensesArray in newValue){
        console.log(expensesArray);
      }
      //newValue.forEach((element) => {
      //  this.evaluatedResult = this.evaluatedResult + element.amount;
        //this.evaluatedResult = this.evaluatedResult + element.amount;
      //});
    },
    addExpenseInput(dataObject) {
      dataObject.push({ amount: null, id: this.nextId++ });
      this.inputCount++;
    },
    removeExpenseInput(index, dataObject) {
      dataObject.splice(index, 1);
      this.inputCount--;
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <div>
    <category-select>Kategorie</category-select>

    <!-- Expenses for Zinka and Chris -->
    <expense-input
      v-for="(expense, index) in expenses.both"
      v-model:costs.number="expense.amount"
      :key="expense.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput(expenses.both)"
      @remove-expense-input="removeExpenseInput(index, expenses.both)"
      >Gemeinsame Ausgaben</expense-input
    >

    <!-- Expenses only for Zinka -->
    <expense-input
      v-for="(expense, index) in expenses.zinka"
      v-model:costs.number="expense.amount"
      :key="expense.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput(expenses.zinka)"
      @remove-expense-input="removeExpenseInput(index, expenses.zinka)"
      >Ausgaben Schmetterling</expense-input
    >

    <!-- Expenses only for Chris -->
    <expense-input
      v-for="(expense, index) in expenses.chris"
      v-model:costs.number="expense.amount"
      :key="expense.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput(expenses.chris)"
      @remove-expense-input="removeExpenseInput(index, expenses.chris)"
      >Ausgaben Guza</expense-input
    >

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
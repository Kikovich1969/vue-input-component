<script>
import TheHeader from "./components/TheHeader.vue";
import TheButton from "./components/TheButton.vue";
import ExpenseInput from "./components/ExpenseInput.vue";
import CategorySelect from "./components/CategorySelect.vue";
import LivePanel from "./components/LivePanel.vue";

export default {
  components: { ExpenseInput, TheHeader, CategorySelect, TheButton, LivePanel },
  data() {
    return {
      expenses: {
        both: [{ amount: 0, id: 0 }],
        zinka: [{ amount: 0, id: 0 }],
        chris: [{ amount: 0, id: 0 }],
      },
      categoryOptions: [
        { id: 1, name: "Billa" },
        { id: 2, name: "BIPA" },
        { id: 12, name: "DM" },
        { id: 3, name: "Naschmarkt" },
        { id: 4, name: "Etsan" },
        { id: 5, name: "Restaurant" },
        { id: 6, name: "Brunch" },
        { id: 7, name: "Hofer" },
        { id: 8, name: "IKEA" },
        { id: 10, name: "Spar" },
        { id: 11, name: "OBI" },
        { id: 13, name: "Kino" },
        { id: 9, name: "Andere" },
      ],
      nextId: 1,
      inputCount: 1,
      expensesBoth: 0,
      expensesZinka: 0,
      expensesChris: 0,
      selectedVendor: "",
      currentUser: "",
    };
  },
  computed: {
    evaluateResult() {
      return (
        this.expensesBoth +
        this.expensesZinka +
        this.expensesChris
      ).toFixed(2);
    },
    evaluateCurrentUser() {
      return this.currentUser === "" ? "Noch nicht gewählt" : this.currentUser;
    },
    evaluateCurrentVendor() {
      return this.selectedVendor === ""
        ? "Noch nicht gewählt"
        : this.selectedVendor;
    },
  },
  watch: {
    "expenses.both": {
      handler(data) {
        this.evaluateExpense(data, "both");
      },
      deep: true,
    },
    "expenses.zinka": {
      handler(data) {
        this.evaluateExpense(data, "zinka");
      },
      deep: true,
    },
    "expenses.chris": {
      handler(data) {
        this.evaluateExpense(data, "chris");
      },
      deep: true,
    },
  },
  methods: {
    addExpenseInput(dataObject) {
      dataObject.push({ amount: null, id: this.nextId++ });
      this.inputCount++;
    },
    removeExpenseInput(index, dataObject) {
      dataObject.splice(index, 1);
      this.inputCount--;
    },
    evaluateExpense(data, who) {
      switch (who) {
        case "both":
          this.expensesBoth = 0;
          break;
        case "zinka":
          this.expensesZinka = 0;
          break;
        case "chris":
          this.expensesChris = 0;
          break;
      }
      for (const [key, value] of Object.entries(data)) {
        if (
          value.amount !== undefined &&
          value.amount !== null &&
          value.amount !== ""
        ) {
          switch (who) {
            case "both":
              this.expensesBoth += value.amount;
              break;
            case "zinka":
              this.expensesZinka += value.amount;
              break;
            case "chris":
              this.expensesChris += value.amount;
              break;
          }
        }
      }
    },
    setVendor(vendor) {
      this.selectedVendor = vendor;
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
    saveToDatabase() {
      console.log("Saving with Axios!");
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <div id="content">
    <div class="btn-group">
      <the-button class="btn btn-signal" @click="setCurrentUser('Zinka')"
        >Zinka</the-button
      >
      <the-button class="btn btn-signal" @click="setCurrentUser('Chris')"
        >Chris</the-button
      >
    </div>

    <category-select
      :vendorCategories="this.categoryOptions"
      @update:vendor="setVendor"
    ></category-select>

    <!-- Expenses for Zinka and Chris -->
    <expense-input
      v-for="(expense, index) in expenses.both"
      v-model:costs.number="expense.amount"
      :key="expense.id"
      :index="index"
      :numberOfInputs="this.inputCount"
      @add-expense-input="addExpenseInput(expenses.both)"
      @remove-expense-input="removeExpenseInput(index, expenses.both)"
      >Gemeinsame Ausgaben:</expense-input
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
      >Für Schmetterling:</expense-input
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
      >Für Guza:</expense-input
    >

    <live-panel>
      <p>Ausgegeben von: {{ evaluateCurrentUser }}</p>
      <p>Ausgegeben für: {{ evaluateCurrentVendor }}</p>
      <p>Gemeinsame Ausgaben: {{ expensesBoth }} Euro</p>
      <p>Zinkas Ausgaben: {{ expensesZinka }} Euro</p>
      <p>Guzas Ausgaben: {{ expensesChris }} Euro</p>
      <p><strong>Summe</strong>: {{ evaluateResult }} Euro</p>
    </live-panel>

    <div class="btn-group">
      <the-button class="btn btn-signal" @click="saveToDatabase"
        >Speichern</the-button
      >
    </div>
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
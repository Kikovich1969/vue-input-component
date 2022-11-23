<script>
export default {
  props: ["vendor", "vendorCategories"],
  emits: ["update:vendor"],
  methods: {

  },
  data() {
    return {
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
    };
  },
};
</script>

<template>
  <section>
    <label for="category-select"><slot></slot></label>
    <div class="form-input">
      <button class="left-decorator">
        <font-awesome-icon icon="fa-solid fa-caret-down" />
      </button>
      <select class="has-left-decorator" @change="$emit('update:vendor', $event.target.value)">
        <option
          v-for="category in categoryOptions"
          value="category.id"
          :key="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 1rem;
}
.form-input {
  display: flex;
  align-items: stretch;
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
.has-left-decorator {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
select {
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
select::after {
  position: absolute;
}
</style>
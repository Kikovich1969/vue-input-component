<template>
  <section>
    <label for="category-select">{{ labelForInput }}</label>
    <div class="form-input">
      <select>
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

<script>
export default {
  props: ["labelForInput"],
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
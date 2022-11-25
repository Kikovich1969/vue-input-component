<template>
  <section id="header-section">
    <div>
      <h1>
        WeXpense <font-awesome-icon icon="fa-solid fa-coins" color="#9bd817" />
      </h1>
      <div class="burger" style="display: block">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#header-section {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
#header-section > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 768px;
  padding: 1rem 2rem;
}
h1 {
  font-size: 2rem;
  font-weight: 200;
}
.burger {
  cursor: pointer;
}
.burger div {
  width: 25px;
  height: 4px;
  background: #b5d86a;
  margin: 5px;
  transition: all 0.25s ease;
}
</style>
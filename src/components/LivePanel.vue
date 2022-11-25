<template>
  <section>
    <h5>
      <span>Status</span> <font-awesome-icon icon="fa-solid fa-coins" color="#9bd817" />
    </h5>
    <div>
        <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 2rem;
  color: #6f7264;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 4px 4px 8px 2px rgb(0 0 0 / 15%);
}
h5 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 100;
  color: #53a52c;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(111, 114, 100, 0.25);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
}
</style>
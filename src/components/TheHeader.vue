<template>
  <section id="header-section" class="w-full flex justify-center bg-white">
    <div class="flex justify-between items-center w-full max-w-3xl py-4 px-8">
      <h1 class="text-3xl font-extralight">
        WeXpense <font-awesome-icon icon="fa-solid fa-coins" class="text-theme" />
      </h1>
      <button
        class="text-gray-500 w-10 h-10 relative focus:outline-none bg-theme rounded"
        @click="open = !open"
      >
        <div
          class="
            block
            w-5
            absolute
            left-1/2
            top-1/2
            transform
            -translate-x-1/2 -translate-y-1/2
          "
        >
          <span
            aria-hidden="true"
            class="
              block
              absolute
              h-0.5
              w-5
              bg-current
              transform
              transition
              duration-500
              ease-in-out
            "
            :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
          ></span>
          <span
            aria-hidden="true"
            class="
              block
              absolute
              h-0.5
              w-5
              bg-current
              transform
              transition
              duration-500
              ease-in-out
            "
            :class="{ 'opacity-0': open }"
          ></span>
          <span
            aria-hidden="true"
            class="
              block
              absolute
              h-0.5
              w-5
              bg-current
              transform
              transition
              duration-500
              ease-in-out
            "
            :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
          ></span>
        </div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>
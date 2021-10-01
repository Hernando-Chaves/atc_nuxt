<template>
  <div class="container">
    <h1 class="text-center text-2xl">Porque ATC</h1>
    <form>
      <div class="grid grid-cols-3 ">
        <div
          class="p-4 border border-gray-200 rounded-md mx-auto justify-items-center"
        >
          <div class="bg-gray-200 mx-auto h-24 w-24 rounded-full"></div>
          <h2 class="text-xl mt-3">Hernando J.Chaves</h2>
          <h3 class="text-center text-md">goth@gmal.com</h3>
        </div>
        <div
          class="p-4 border border-gray-200 rounded-md  justify-items-center col-span-2"
        >
          <label for="nombre">
            Nombre
            <input
              type="text"
              class="border border-gray-300 shadow-md w-full px-3 focus-ring-2 focus:ring-purple-500 rounded-md focus:outline-none"
          /></label>
        </div>
      </div>
    </form>
    <!-- <form>
      <input
        class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..."
      />
      <button
        class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
      >
        Sign up
      </button>
    </form> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

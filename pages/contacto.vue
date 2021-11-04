<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-4 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0"></div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="px-4 py-3 bg-gray-50  sm:px-6">
          <h2 class="text-2xl text-center text-primary-700 font-semibold">
            Contáctame
          </h2>
        </div>
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-4 gap-6">
                <div class="col-span-4 sm:col-span-4">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nombre</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50  sm:px-6">
              <button
                type="submit"
                class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  </div>
</template>

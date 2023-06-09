<template>
    <title>Pre Order - KicksKarma</title>

    <div class="relative bg-white">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="mx-auto max-w-lg">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Pre Order</h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">Secure your sneakers now with a small pre-order fee and stay steps ahead in the game. Limited stock available!</p>
            <dl class="mt-8 text-base text-gray-500">
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <CurrencyDollarIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">Fee calculated based on sneaker stock</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div class="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
              <div>
                <label for="full-name" class="sr-only">Full name</label>
                <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Full name" />
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email" />
              </div>
              <div>
                <label for="phone" class="sr-only">Phone</label>
                <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone" />
              </div>
              <div>
                <label for="sneaker-name" class="sr-only">Sneaker Name</label>
                <input type="text" name="sneaker-name" id="sneaker-name" autocomplete="sneaker-name" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Sneaker Name" />
              </div>
              <div>
                <label for="SKU" class="sr-only">Sneaker SKU</label>
                <input type="text" name="SKU" id="SKU" autocomplete="SKU" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="SKU" />
              </div>
              <div>
                <label for="size" class="sr-only">Size</label>
                <input type="text" name="size" id="size" autocomplete="size" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Size in EU" />
              </div>
              <div>
                <label for="message" class="sr-only">Note</label>
                <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Note" />
              </div>
              <div>
                <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-black py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CurrencyDollarIcon } from '@heroicons/vue/24/outline'
  </script>
<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <router-link :to="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</router-link>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                  <span class="ml-3 block text-base font-medium text-gray-900">EUR</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center lg:hidden">
              <button type="button" class="-ml-2 rounded-md bg-white p-2 text-gray-400" @click="open = true">
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>

              <a href="search" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:block lg:flex-1 lg:self-stretch">
              <div class="flex h-full space-x-8">                
                <router-link v-for="page in navigation.pages" :key="page.name" :to="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</router-link>
              </div>
            </PopoverGroup>

            <!-- Logo -->
            <a href="/" class="flex">
              <span class="sr-only">KicksKarma</span>
              <img class="h-8 w-auto" src="/logo.png" alt="" />
            </a>

            <div class="flex flex-1 items-center justify-end">
              <a href="#" class="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                <span class="ml-3 block text-sm font-medium">EUR</span>
                <span class="sr-only">, change currency</span>
              </a>

              <!-- Search -->
              <a href="search" class="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                <span class="sr-only">Search</span>
                <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Account -->
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                <span class="sr-only">Account</span>
                <UserIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="cart" class="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: 'products' },
    { name: 'Feedbacks', href: 'feedbacks' },
    { name: 'Contact', href: 'contact' },
  ],
}

const open = ref(false)
</script>
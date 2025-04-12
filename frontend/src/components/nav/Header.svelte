<script>
  import Logomark from "../icons/Logomark.svelte"
  import Github from "../icons/Github.svelte";
  import NavLink from "./Nav-Link.svelte";
</script>


<header class="absolute text-slate-700 inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">userAgent.one</span>
          <Logomark width="64" height="64" className="text-slate-700" />
        </a>
      </div>
      <div class="flex flex-1 justify-end gap-8">
        <NavLink
          href="#usage"
        >
          Usage
        </NavLink >
        <NavLink href="https://github.com/firstflush/useragent-one" external={true}>
          <Github height="24" width="24" />
        </NavLink>
      </div>
    </nav>
    
  </header>



<!-- 
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">Product</a>
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">Features</a>
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">Marketplace</a>
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">Company</a>
            </div>
            <div class="py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800">
                <Github height="48" width="48" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
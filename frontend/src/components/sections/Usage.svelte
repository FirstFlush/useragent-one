<script lang="ts">
  import { apiParams } from "../../data/apiParams";
  import { USAGE_CONSTANTS } from "../../data/constants";
  import { SlidersHorizontal, Link, BookText, ArrowRightCircle } from "lucide-svelte";
</script>


<!-- <div id="usage" class="bg-slate-700/20 prose max-w-2xl sm:w-full mx-4 sm:mx-auto px-4 sm:px-12 py-12 rounded-lg shadow-md"> -->
<div id="usage" class="text-slate-900 relative overflow-hidden prose max-w-2xl shadow-lg sm:w-full mx-4 sm:mx-auto px-4 sm:px-12 py-12 rounded-lg ">
  <!-- <div class="absolute inset-0 z-0 bg-slate-700/20 backdrop-blur-sm"></div> -->
  <div class="absolute inset-0 z-0 bg-slate-700/15 backdrop-blur-sm border border-white/10 shadow-lg"></div>
  <div class="relative z-10">
  <h2 class="flex items-center gap-2 mb-12"><BookText /> API Usage</h2>
    <p class="text-lg font-semibold flex items-center gap-2">
      <Link size="16" /> Endpoint
    </p>
    <pre><code class="text-white">https://useragent.one/api/user-agents</code></pre>


    <p class="flex items-center gap-2">
      <ArrowRightCircle size="16" /><span>Make a <span class="font-semibold">GET</span> request to the API with optional filters</span>
    </p>
  
    <pre><code class="language-js text-white">
  fetch({USAGE_CONSTANTS.FetchUrl})
    .then(res => res.json())
    .then(console.log);
    </code></pre>

  <div class="pt-12">
    <h3 class="flex items-center gap-2 mb-12 sm:mb-0"><SlidersHorizontal />Query Parameters</h3>
    <div class="flex flex-col gap-12 sm:gap-6">
      {#each apiParams as param}
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div class="font-semibold">{param.name}</div>
            {#if param.desc}
              <div class="text-sm text-slate-700">{param.desc}</div>
            {/if}
          </div>
          <div class="sm:mt-0 sm:justify-self-end text-white max-w-fit">
            <pre><code>{param.note ?? param.type}</code></pre>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
    
<!-- 
    <ul>
      <li><code>deviceCategory</code> – <code>mobile | desktop | tablet</code></li>
      <li><code>platform</code> – <code>win32 | linux | macintel</code></li>
      <li><code>userAgentVersion</code> – (optional) semver match</li>
    </ul> -->
  </div>
  
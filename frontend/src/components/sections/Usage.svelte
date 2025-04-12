<script lang="ts">
  import { apiParams } from "../../data/apiParams";
  import { USAGE_CONSTANTS } from "../../data/constants";
</script>

<section id="usage" class="prose mx-auto max-w-2xl mt-24 w-full px-8">
    <h2>Usage</h2>

    <p>
      Endpoint
    </p>
    <pre><code>https://useragent.one/api/user-agents</code></pre>


    <p>
      Make a <span class="font-semibold">GET</span> request to the API with optional filters
    </p>
  
    <pre><code class="language-js">
  fetch({USAGE_CONSTANTS.FetchUrl})
    .then(res => res.json())
    .then(console.log);
    </code></pre>

  <div class="py-12">
    <h3>Query Parameters</h3>
    <div class="flex flex-col gap-12 sm:gap-6">
      {#each apiParams as param}
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div class="font-semibold text-lg">{param.name}</div>
            {#if param.desc}
              <div class="text-sm text-slate-500">{param.desc}</div>
            {/if}
          </div>
          <div class="sm:mt-0 sm:justify-self-end max-w-fit">
            <pre><code>{param.note ?? param.type}</code></pre>
          </div>
        </div>
      {/each}
    </div>
  </div>
    
    
<!-- 
    <ul>
      <li><code>deviceCategory</code> – <code>mobile | desktop | tablet</code></li>
      <li><code>platform</code> – <code>win32 | linux | macintel</code></li>
      <li><code>userAgentVersion</code> – (optional) semver match</li>
    </ul> -->
  </section>
  
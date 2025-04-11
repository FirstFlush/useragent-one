<section class="prose mx-auto max-w-2xl mt-48">
    <h2>Usage</h2>
    <p>
      Make a simple GET request to the API with optional filters.
    </p>
  
    <pre><code class="language-js">
  fetch('https://useragent.one/api?deviceCategory=desktop')
    .then(res => res.json())
    .then(console.log);
    </code></pre>
  
    <p>
      Here's the endpoint:
    </p>
    <pre><code>https://useragent.one/api/user-agents</code></pre>
  
    <h3>Query Parameters</h3>
    <ul>
      <li><code>deviceCategory</code> – <code>mobile | desktop | tablet</code></li>
      <li><code>platform</code> – <code>win32 | linux | macintel</code></li>
      <li><code>userAgentVersion</code> – (optional) semver match</li>
    </ul>
  </section>
  
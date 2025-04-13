<script lang="ts">
    export let href: string;
    export let className = "";
    export let external = false;
    export let icon: boolean = false;
  </script>
  
  <a
    href={href}
    class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 focus:outline-none tracking-wide duration-200 transition-colors {icon 
        ? ' hover:text-slate-500 focus-visible:text-slate-500 active:text-slate-400' 
        : ' bg-slate-300 hover:bg-slate-400 focus-visible:bg-slate-500 active:bg-slate-500'} {className}"
    target={external ? "_blank" : null}
    rel={external ? "noopener noreferrer" : null}
  >
    <slot />
  </a>
  
<script lang="ts">
    export let href: string;
    export let className = "";
    export let external = false;
    export let icon: boolean = false;
  </script>
  
  <a
    href={href}
    class="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 tracking-wide duration-200 transition-colors {icon 
        ? ' hover:text-slate-500' 
        : ' hover:bg-slate-300'} {className}"
    target={external ? "_blank" : null}
    rel={external ? "noopener noreferrer" : null}
  >
    <slot />
  </a>
  